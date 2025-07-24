export { renderers } from '../../renderers.mjs';

const prerender = false;
const POST = async ({ request }) => {
  let payload = null;
  try {
    const contentType = request.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
      payload = await request.json();
    } else {
      const formData = await request.formData();
      payload = Object.fromEntries(formData.entries());
    }
  } catch (err) {
    console.warn("Body JSON parse error:", err);
    return new Response(JSON.stringify({
      success: false,
      message: "Formato de datos inválido."
    }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
  try {
    const { name, email, phone = "", subject, message } = payload || {};
    if (!name || !email || !subject || !message) {
      return new Response(JSON.stringify({
        success: false,
        message: "Todos los campos requeridos deben ser completados."
      }), {
        status: 400,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({
        success: false,
        message: "Por favor ingresa un correo electrónico válido."
      }), {
        status: 400,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
    const emailContent = `
Nuevo mensaje de contacto desde el sitio web:

Nombre: ${name}
Email: ${email}
Teléfono: ${phone || "No proporcionado"}
Asunto: ${subject}

Mensaje:
${message}

---
Este mensaje fue enviado desde el formulario de contacto del sitio web.
Fecha: ${(/* @__PURE__ */ new Date()).toLocaleString("es-PR", { timeZone: "America/Puerto_Rico" })}
    `.trim();
    try {
      const { Resend } = await import('resend');
      const apiKey = "re_Y491DNVa_BrXqSxUvXJaDw1qj4MQQr7Yh";
      if (!apiKey) ;
      const resend = new Resend(apiKey);
      const sendResult = await resend.emails.send({
        from: "Jonathan Roofing <onboarding@resend.dev>",
        to: ["jonathanroofingandlandscaping@gmail.com"],
        subject: `Nuevo mensaje: ${subject}`,
        text: emailContent
      });
      if (sendResult.error) {
        console.error("Error enviando email:", sendResult.error);
        throw new Error("EmailError");
      }
    } catch (err) {
      console.error("Fallo al enviar email (Resend):", err);
      return new Response(JSON.stringify({
        success: false,
        message: "No pudimos enviar tu mensaje. Intenta nuevamente más tarde."
      }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
    return new Response(JSON.stringify({
      success: true,
      message: "¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto."
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return new Response(JSON.stringify({
      success: false,
      message: "Hubo un error al enviar tu mensaje. Por favor intenta nuevamente."
    }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
