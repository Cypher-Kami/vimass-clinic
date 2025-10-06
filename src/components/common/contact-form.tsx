'use client'

import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'

const contactSchema = z.object({
  nombre: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  telefono: z.string().min(10, 'El teléfono debe tener al menos 10 dígitos'),
  email: z.string().email('Email inválido'),
  tratamiento: z.string().optional(),
  mensaje: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

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
        toast.success('¡Mensaje enviado! Te contactaremos pronto.')
        reset()
      } else {
        throw new Error('Error al enviar el mensaje')
      }
    } catch {
      toast.error('Error al enviar el mensaje. Inténtalo de nuevo.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="nombre">Nombre completo *</Label>
          <Input
            id="nombre"
            placeholder="Tu nombre"
            {...register('nombre')}
            className="h-12 rounded-xl border-border/50 focus:border-accent"
          />
          {errors.nombre && (
            <p className="text-red-500 text-sm">{errors.nombre.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="telefono">Teléfono *</Label>
          <Input
            id="telefono"
            type="tel"
            placeholder="Tu teléfono"
            {...register('telefono')}
            className="h-12 rounded-xl border-border/50 focus:border-accent"
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
          className="h-12 rounded-xl border-border/50 focus:border-accent"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="tratamiento">Tratamiento de interés</Label>
        <Input
          id="tratamiento"
          placeholder="¿En qué tratamiento estás interesado?"
          {...register('tratamiento')}
          className="h-12 rounded-xl border-border/50 focus:border-accent"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="mensaje">Mensaje *</Label>
        <Textarea
          id="mensaje"
          placeholder="Cuéntanos más sobre tu consulta..."
          rows={4}
          {...register('mensaje')}
          className="rounded-xl border-border/50 focus:border-accent resize-none"
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
        {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
      </Button>

      <p className="text-sm text-muted-foreground text-center">
        Al enviar este formulario, aceptas nuestras{' '}
        <a href="/legal" className="text-accent hover:underline">
          políticas de privacidad
        </a>
      </p>
    </form>
  )
}