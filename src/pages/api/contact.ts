import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  let payload: Record<string, unknown> | null = null;
  // Intentamos parsear JSON de forma segura
  try {
    const contentType = request.headers.get('content-type') || '';
    if (contentType.includes('application/json')) {
      payload = await request.json();
    } else {
      // Si no es JSON, intentamos convertir form data a objeto
      const formData = await request.formData();
      payload = Object.fromEntries(formData.entries());
    }
  } catch (err) {
    console.warn('Body JSON parse error:', err);
    return new Response(JSON.stringify({
      success: false,
      message: 'Formato de datos inválido.'
    }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }
  try {
    const { name, email, phone = '', subject, message } = (payload || {}) as Record<string, string>;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return new Response(JSON.stringify({
        success: false,
        message: 'Todos los campos requeridos deben ser completados.'
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({
        success: false,
        message: 'Por favor ingresa un correo electrónico válido.'
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    // Prepare email content
    const emailContent = `
Nuevo mensaje de contacto desde el sitio web:

Nombre: ${name}
Email: ${email}
Teléfono: ${phone || 'No proporcionado'}
Asunto: ${subject}

Mensaje:
${message}

---
Este mensaje fue enviado desde el formulario de contacto del sitio web.
Fecha: ${new Date().toLocaleString('es-PR', { timeZone: 'America/Puerto_Rico' })}
    `.trim();

        // Envío real usando Resend (https://resend.com)
    // Necesitas configurar la variable de entorno RESEND_API_KEY en tu proyecto
    try {
      // Dinámico import para evitar problemas en entornos edge/serverless
      const { Resend } = await import('resend');
      const apiKey = import.meta.env.RESEND_API_KEY as string | undefined;
      if (!apiKey) {
        throw new Error('Falta configurar RESEND_API_KEY');
      }
      const resend = new Resend(apiKey);

      const sendResult = await resend.emails.send({
        from: 'Jonathan Roofing <onboarding@resend.dev>',
        to: ['jonathanroofingandlandscaping@gmail.com'],
        subject: `Nuevo mensaje: ${subject}`,
        text: emailContent
      });

      if (sendResult.error) {
        console.error('Error enviando email:', sendResult.error);
        throw new Error('EmailError');
      }
    } catch (err) {
      console.error('Fallo al enviar email (Resend):', err);
      return new Response(JSON.stringify({
        success: false,
        message: 'No pudimos enviar tu mensaje. Intenta nuevamente más tarde.'
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({
      success: true,
      message: '¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.'
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });

  } catch (error) {
    console.error('Error processing contact form:', error);
    
    return new Response(JSON.stringify({
      success: false,
      message: 'Hubo un error al enviar tu mensaje. Por favor intenta nuevamente.'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};
