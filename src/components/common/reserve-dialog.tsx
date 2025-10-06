"use client"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { useLanguage } from "@/components/providers/language-provider"

const FormSchema = z.object({
  nombre: z.string().min(2),
  telefono: z.string().min(6),
  mensaje: z.string().optional(),
})

export function ReserveDialog() {
  const { t } = useLanguage()
  const form = useForm<{ nombre: string; telefono: string; mensaje?: string }>({ resolver: zodResolver(FormSchema) })

  const onSubmit = async (data: { nombre: string; telefono: string; mensaje?: string }) => {
    try {
      const res = await fetch("/api/contact", { method: "POST", body: JSON.stringify(data) })
      if (!res.ok) throw new Error("Error")
      toast.success("Gracias", { description: "Te contactaremos en breve." })
    } catch {
      toast.error("Ups", { description: "No se pudo enviar. Prueba WhatsApp." })
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="inline-flex items-center justify-center px-8 py-4 bg-accent text-foreground rounded-2xl hover:bg-accent/80 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 h-14 w-full sm:w-auto">
          {t('cta.reserve')}
        </Button>
      </DialogTrigger>
      <DialogContent className="rounded-2xl">
        <DialogHeader><DialogTitle>{t('dialog.quickReserve')}</DialogTitle></DialogHeader>
        <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
          <Input placeholder={t('dialog.namePlaceholder')} {...form.register("nombre")} />
          <Input placeholder={t('dialog.phonePlaceholder')} {...form.register("telefono")} />
          <Textarea placeholder={t('dialog.messagePlaceholder')} {...form.register("mensaje")} />
          <Button 
            type="submit" 
            className="w-full px-8 py-4 bg-accent text-foreground rounded-2xl hover:bg-accent/80 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            {t('dialog.submit')}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}