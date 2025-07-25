/* empty css                                 */
import { a as createComponent, b as renderComponent, f as renderScript, r as renderTemplate, m as maybeRenderHead, g as addAttribute } from '../chunks/astro/server_aGPWHd_y.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_CXwWeXT8.mjs';
import { b as $$BaseHead } from '../chunks/Footer_Cn1fRBOe.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Contacto = createComponent(async ($$result, $$props, $$slots) => {
  const pageTitle = "Cont\xE1ctanos | Jonathan Roofing & Landscaping";
  const pageDescription = "Solicita tu cotizaci\xF3n gratis o resuelve tus dudas sobre mantenimiento de \xE1reas verdes, techos y handyman. \xA1Respuesta en menos de 24 h!";
  const contactInfo = [
    { icon: "fas fa-map-marker-alt", title: "Direcci\xF3n", content: "Barranquitas, Puerto Rico", link: "https://www.openstreetmap.org/#map=14/18.1869/-66.3129" },
    { icon: "fas fa-phone-alt", title: "Tel\xE9fono", content: "+1 (939) 263-4528", link: "tel:19392634528" },
    { icon: "fas fa-envelope", title: "Correo Electr\xF3nico", content: "jonathanroofingandlandscaping@gmail.com", link: "mailto:jonathanroofingandlandscaping@gmail.com" },
    { icon: "fas fa-clock", title: "Horario", content: "Lun-Vie: 8:00 AM - 6:00 PM\nS\xE1b: 9:00 AM - 2:00 PM", link: "" }
  ];
  const formFields = [
    { id: "name", type: "text", label: "Nombre Completo", placeholder: "Tu nombre completo", required: true },
    { id: "email", type: "email", label: "Correo Electr\xF3nico", placeholder: "tu@email.com", required: true },
    { id: "phone", type: "tel", label: "Tel\xE9fono", placeholder: "Tu n\xFAmero de tel\xE9fono", required: true },
    { id: "subject", type: "text", label: "Asunto", placeholder: "\xBFC\xF3mo podemos ayudarte?", required: true },
    { id: "message", type: "textarea", label: "Mensaje", placeholder: "Cu\xE9ntanos m\xE1s...", required: true }
  ];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle, "description": pageDescription, "data-astro-cid-2mxdoeuz": true }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="page-header" role="region" aria-labelledby="contact-header-title" data-astro-cid-2mxdoeuz> <div class="container" data-astro-cid-2mxdoeuz> <h1 id="contact-header-title" data-astro-cid-2mxdoeuz>Contáctenos</h1> <nav class="breadcrumb" aria-label="Breadcrumb" data-astro-cid-2mxdoeuz> <a href="/" data-astro-cid-2mxdoeuz>Inicio</a> <span data-astro-cid-2mxdoeuz>/</span> <span data-astro-cid-2mxdoeuz>Contacto</span> </nav> </div> </section> <section class="contact-section" role="region" aria-labelledby="contact-section-title" data-astro-cid-2mxdoeuz> <div class="container" data-astro-cid-2mxdoeuz> <div class="section-header" data-astro-cid-2mxdoeuz> <h2 id="contact-section-title" data-astro-cid-2mxdoeuz>Estamos Aquí para Ayudarte</h2> <p data-astro-cid-2mxdoeuz>Completa el formulario y nos pondremos en contacto contigo.</p> </div> <div class="contact-container" data-astro-cid-2mxdoeuz> <div class="contact-form-container" data-astro-cid-2mxdoeuz> <form id="contactForm" class="contact-form" data-astro-cid-2mxdoeuz> <fieldset data-astro-cid-2mxdoeuz> <legend class="sr-only" data-astro-cid-2mxdoeuz>Formulario de Contacto</legend> ${formFields.map((field) => renderTemplate`<div class="form-group" data-astro-cid-2mxdoeuz> <label${addAttribute(field.id, "for")} data-astro-cid-2mxdoeuz> ${field.label} ${field.required && renderTemplate`<span class="required" data-astro-cid-2mxdoeuz>*</span>`} </label> ${field.type === "textarea" ? renderTemplate`<textarea${addAttribute(field.id, "id")}${addAttribute(field.id, "name")}${addAttribute(field.placeholder, "placeholder")}${addAttribute(field.required, "required")} rows="5" data-astro-cid-2mxdoeuz></textarea>` : renderTemplate`<input${addAttribute(field.type, "type")}${addAttribute(field.id, "id")}${addAttribute(field.id, "name")}${addAttribute(field.placeholder, "placeholder")}${addAttribute(field.required, "required")} data-astro-cid-2mxdoeuz>`} </div>`)} <div class="form-actions" data-astro-cid-2mxdoeuz> <button type="submit" class="btn btn-primary" data-astro-cid-2mxdoeuz> <i class="fas fa-paper-plane" data-astro-cid-2mxdoeuz></i> Enviar Mensaje
</button> </div> <div id="formMessage" class="form-message" data-astro-cid-2mxdoeuz></div> </fieldset> </form> </div> <div class="contact-info-container" role="region" aria-labelledby="contact-info-title" data-astro-cid-2mxdoeuz> <div class="contact-info-box" data-astro-cid-2mxdoeuz> <h3 id="contact-info-title" data-astro-cid-2mxdoeuz>Información de Contacto</h3> <p data-astro-cid-2mxdoeuz>Estamos disponibles para atenderte en nuestro horario de atención.</p> <ul class="contact-info-list" data-astro-cid-2mxdoeuz> ${contactInfo.map((item) => renderTemplate`<li class="contact-info-item" data-astro-cid-2mxdoeuz> <div class="contact-icon" data-astro-cid-2mxdoeuz> <i${addAttribute(item.icon, "class")} data-astro-cid-2mxdoeuz></i> </div> <div class="contact-details" data-astro-cid-2mxdoeuz> <h4 data-astro-cid-2mxdoeuz>${item.title}</h4> ${item.link ? renderTemplate`<a${addAttribute(item.link, "href")} target="_blank" rel="noopener noreferrer" data-astro-cid-2mxdoeuz> ${item.content.split("\n").map((line) => renderTemplate`<p data-astro-cid-2mxdoeuz>${line}</p>`)} </a>` : renderTemplate`<p data-astro-cid-2mxdoeuz>${item.content}</p>`} </div> </li>`)} </ul> <div class="social-links" data-astro-cid-2mxdoeuz> <a href="#" class="social-link" aria-label="Facebook" data-astro-cid-2mxdoeuz><i class="fab fa-facebook-f" data-astro-cid-2mxdoeuz></i></a> <a href="#" class="social-link" aria-label="Twitter" data-astro-cid-2mxdoeuz><i class="fab fa-twitter" data-astro-cid-2mxdoeuz></i></a> <a href="#" class="social-link" aria-label="Instagram" data-astro-cid-2mxdoeuz><i class="fab fa-instagram" data-astro-cid-2mxdoeuz></i></a> <a href="#" class="social-link" aria-label="LinkedIn" data-astro-cid-2mxdoeuz><i class="fab fa-linkedin-in" data-astro-cid-2mxdoeuz></i></a> </div> </div> </div> </div> </div> </section> <section class="map-section" role="region" aria-labelledby="map-section-title" data-astro-cid-2mxdoeuz> <h2 id="map-section-title" class="sr-only" data-astro-cid-2mxdoeuz>Mapa de Ubicación</h2> <div id="map" data-astro-cid-2mxdoeuz></div> </section> `, "head": async ($$result2) => renderTemplate`${renderComponent($$result2, "BaseHead", $$BaseHead, { "title": pageTitle, "description": pageDescription, "slot": "head", "data-astro-cid-2mxdoeuz": true })}` })}  ${renderScript($$result, "/home/alberto/ember-drago/cliente-1/src/pages/contacto.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/alberto/ember-drago/cliente-1/src/pages/contacto.astro", void 0);

const $$file = "/home/alberto/ember-drago/cliente-1/src/pages/contacto.astro";
const $$url = "/contacto";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contacto,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
