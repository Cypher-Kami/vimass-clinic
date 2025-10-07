'use client'

import { useState, useMemo } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'
import { useLanguage } from '@/components/providers/language-provider'

type ContactFormData = {
  nombre: string
  telefono: string
  email: string
  tratamiento?: string
  mensaje: string
}

export default function ContactForm() {
  const { t } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Create schema with translated error messages that updates when language changes
  const contactSchema = useMemo(() => z.object({
    nombre: z.string().min(2, t('home.form.errors.nameRequired') || 'El nombre debe tener al menos 2 caracteres'),
    telefono: z.string().min(10, t('home.form.errors.phoneRequired') || 'El teléfono debe tener al menos 10 dígitos'),
    email: z.string().email(t('home.form.errors.emailInvalid') || 'Email inválido'),
    tratamiento: z.string().optional(),
    mensaje: z.string().min(10, t('home.form.errors.messageRequired') || 'El mensaje debe tener al menos 10 caracteres'),
  }), [t])

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        toast.success(t('common.success') + ': ¡Mensaje enviado! Te contactaremos pronto.')
        reset()
      } else {
        throw new Error('Error al enviar el mensaje')
      }
    } catch {
      toast.error(t('common.error') + ': Error al enviar el mensaje. Inténtalo de nuevo.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="nombre">{t('home.form.nameLabel') || 'Nombre completo'} *</Label>
          <Input
            id="nombre"
            placeholder={t('home.form.namePlaceholder') || 'Tu nombre'}
            {...register('nombre')}
            className="h-12 rounded-xl border-border focus:border-accent"
          />
          {errors.nombre && (
            <p className="text-red-500 text-sm">{errors.nombre.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="telefono">{t('home.form.phoneLabel') || 'Teléfono'} *</Label>
          <Input
            id="telefono"
            type="tel"
            placeholder={t('home.form.phonePlaceholder') || 'Tu teléfono'}
            {...register('telefono')}
            className="h-12 rounded-xl border-border focus:border-accent"
          />
          {errors.telefono && (
            <p className="text-red-500 text-sm">{errors.telefono.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email *</Label>
        <Input
          id="email"
          type="email"
          placeholder="tu@email.com"
          {...register('email')}
          className="h-12 rounded-xl border-border focus:border-accent"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="tratamiento">{t('home.form.treatmentLabel') || 'Tratamiento de interés'}</Label>
        <Input
          id="tratamiento"
          placeholder={t('home.form.treatmentPlaceholder') || '¿En qué tratamiento estás interesado?'}
          {...register('tratamiento')}
          className="h-12 rounded-xl border-border focus:border-accent"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="mensaje">{t('home.form.messageLabel') || 'Mensaje'} *</Label>
        <Textarea
          id="mensaje"
          placeholder={t('home.form.messagePlaceholder') || 'Cuéntanos más sobre tu consulta...'}
          rows={4}
          {...register('mensaje')}
          className="rounded-xl border-border focus:border-accent resize-none"
        />
        {errors.mensaje && (
          <p className="text-red-500 text-sm">{errors.mensaje.message}</p>
        )}
      </div>

      <Button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full h-12 rounded-xl bg-accent hover:bg-accent/90 text-foreground font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
      >
        {isSubmitting ? (t('common.loading') || 'Enviando...') : (t('home.form.submitButton') || 'Enviar mensaje')}
      </Button>

      <p className="text-sm text-muted-foreground text-center">
        {t('home.form.privacy') || 'Al enviar este formulario, aceptas nuestras'}{' '}
        <a href="/legal" className="text-accent hover:underline">
          {t('footer.privacy') || 'políticas de privacidad'}
        </a>
      </p>
    </form>
  )
}