import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, d as renderSlot, e as renderHead, F as Fragment } from './astro/server_aGPWHd_y.mjs';
import 'kleur/colors';
import { $ as $$Footer, a as $$Navbar, b as $$BaseHead } from './Footer_Cn1fRBOe.mjs';
/* empty css                         */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a, _b;
const $$Astro = createAstro("https://tu-dominio.com");
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { title, description = "Servicios profesionales de mantenimiento y mejoras para el hogar" } = Astro2.props;
  return renderTemplate(_b || (_b = __template(['<html lang="es"> <head>', '<meta name="viewport" content="width=device-width, initial-scale=1.0"><title>', ' | Servicios Profesionales</title><!-- Favicon --><link rel="icon" type="image/svg+xml" href="/favicon.svg"><!-- Google Fonts --><link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet"><!-- Font Awesome --><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"><!-- Alpine.js --><script src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js" defer><\/script>', "<!-- Global Styles -->", '</head> <body> <!-- WhatsApp Floating Button --> <a href="http://wa.link/tx3x9f" class="whatsapp-float" target="_blank" rel="noopener noreferrer" aria-label="Contactar por WhatsApp"> <i class="fab fa-whatsapp"></i> </a> ', ' <main role="main"> ', " </main> ", ' <script src="/js/main.js" type="module"><\/script> </body> </html>'])), renderComponent($$result, "BaseHead", $$BaseHead, { "title": `${title} | Servicios Profesionales`, "description": description }), title, ["/", "/contacto/"].includes(Astro2.url.pathname) && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate(_a || (_a = __template(['<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" crossorigin="anonymous"><script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" crossorigin="anonymous" defer><\/script>']))) })}`, renderHead(), renderComponent($$result, "Header", $$Navbar, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "/home/alberto/ember-drago/cliente-1/src/layouts/MainLayout.astro", void 0);

export { $$MainLayout as $ };
