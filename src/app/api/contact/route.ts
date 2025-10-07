import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, phone, treatment, message } = body

    // Validación básica
    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      )
    }

    // Enviar email a la clínica
    const clinicEmail = await resend.emails.send({
      from: 'contacto@vimass-clinic.com', // Debe ser un dominio verificado en Resend
      to: ['celina@vimass-clinic.com'], // Email de la clínica
      subject: `Nueva consulta de ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #d4af37;">Nueva Consulta - VIMASS Clinic</h2>
          
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Datos del paciente:</h3>
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Teléfono:</strong> ${phone}</p>
            <p><strong>Tratamiento de interés:</strong> ${treatment}</p>
          </div>
          
          <div style="background: #fff; padding: 20px; border-radius: 8px; border-left: 4px solid #d4af37;">
            <h3 style="margin-top: 0;">Mensaje:</h3>
            <p style="line-height: 1.6;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding: 20px; background: #f0f0f0; border-radius: 8px;">
            <p style="margin: 0; font-size: 14px; color: #666;">
              Este email fue enviado desde el formulario de contacto de VIMASS Clinic.
            </p>
          </div>
        </div>
      `
    })

    // Enviar email de confirmación al paciente (opcional, si tienes su email)
    // const patientEmail = await resend.emails.send({...})

    return NextResponse.json({ 
      success: true, 
      message: 'Consulta enviada correctamente',
      emailId: clinicEmail.data?.id
    })

  } catch (error) {
    console.error('Error enviando email:', error)
    return NextResponse.json(
      { error: 'Error enviando la consulta. Intenta nuevamente.' },
      { status: 500 }
    )
  }
}