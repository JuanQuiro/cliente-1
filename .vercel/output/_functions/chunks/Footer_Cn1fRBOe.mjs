import { c as createAstro, a as createComponent, g as addAttribute, r as renderTemplate, m as maybeRenderHead } from './astro/server_aGPWHd_y.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */
import { S as SITE_TITLE } from './consts_BuHq6iFx.mjs';

const heroBg = new Proxy({"src":"/_astro/hero.DECBFIDn.png","width":2816,"height":1536,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/alberto/ember-drago/cliente-1/src/assets/servicios/hero.png";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro("https://tu-dominio.com");
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const { title, description, image = heroBg } = Astro2.props;
  return renderTemplate`<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="sitemap" href="/sitemap-index.xml"><link rel="alternate" type="application/rss+xml"${addAttribute(SITE_TITLE, "title")}${addAttribute(new URL("rss.xml", Astro2.site), "href")}><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Font preloads --><link rel="preload" href="/fonts/atkinson-regular.woff" as="font" type="font/woff" crossorigin><link rel="preload" href="/fonts/atkinson-bold.woff" as="font" type="font/woff" crossorigin><!-- Canonical URL --><link rel="canonical"${addAttribute(canonicalURL, "href")}><!-- Primary Meta Tags --><title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(new URL(image.src, Astro2.url), "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro2.url, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(new URL(image.src, Astro2.url), "content")}>`;
}, "/home/alberto/ember-drago/cliente-1/src/components/BaseHead.astro", void 0);

const logoNavbar = new Proxy({"src":"/_astro/logo-navbar.GnEZt_7C.png","width":641,"height":389,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/alberto/ember-drago/cliente-1/src/assets/logo-navbar.png";
							}
							
							return target[name];
						}
					});

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<header class="navbar" data-astro-cid-5blmo7yk> <div class="container" data-astro-cid-5blmo7yk> <a href="/" class="logo" data-astro-cid-5blmo7yk> <img', ` alt="Jonathan Roofing" class="logo-image" data-astro-cid-5blmo7yk> </a> <button class="mobile-menu-btn" aria-label="Men\xFA" aria-expanded="false" aria-controls="nav-links" data-astro-cid-5blmo7yk> <span class="menu-icon" data-astro-cid-5blmo7yk></span> </button> <ul class="nav-links" id="nav-links" data-astro-cid-5blmo7yk> <li class="close-btn" data-astro-cid-5blmo7yk><button class="close-menu-btn" aria-label="Cerrar men\xFA" data-astro-cid-5blmo7yk>&times;</button></li> <li data-astro-cid-5blmo7yk><a href="/" class="nav-link" data-astro-cid-5blmo7yk>Inicio</a></li> <li data-astro-cid-5blmo7yk><a href="/servicios" class="nav-link" data-astro-cid-5blmo7yk>Servicios</a></li> <li data-astro-cid-5blmo7yk><a href="/nosotros" class="nav-link " data-astro-cid-5blmo7yk>Nosotros</a></li> <li data-astro-cid-5blmo7yk><a href="/contacto" class="nav-link " data-astro-cid-5blmo7yk>Contacto</a></li> <li class="cta" data-astro-cid-5blmo7yk><a href="http://wa.link/tx3x9f" class="btn-primary" data-astro-cid-5blmo7yk>Cotizaci\xF3n Gratis</a></li> </ul> <div class="nav-overlay" id="nav-overlay" data-astro-cid-5blmo7yk></div> </div> </header>  <script>
  (() => {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    const menuBtn = navbar.querySelector('.mobile-menu-btn');
    const navLinks = navbar.querySelector('#nav-links');
    const overlay = document.getElementById('nav-overlay');
    const closeBtn = navLinks.querySelector('.close-menu-btn');
    if (!menuBtn || !navLinks) return;

    const toggleMenu = () => {
      const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', (!expanded).toString());
      navLinks.classList.toggle('active');
      if (overlay) overlay.classList.toggle('active');
      document.body.classList.toggle('overflow-hidden', !expanded);
    };

    menuBtn.addEventListener('click', toggleMenu);
    if (overlay) overlay.addEventListener('click', toggleMenu);
    if (closeBtn) closeBtn.addEventListener('click', toggleMenu);
    // Cerrar con tecla ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navLinks.classList.contains('active')) {
        toggleMenu();
      }
    });
    navLinks.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      menuBtn.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('overflow-hidden');
    }));
  })();
<\/script>`])), maybeRenderHead(), addAttribute(logoNavbar.src, "src"));
}, "/home/alberto/ember-drago/cliente-1/src/components/Navbar.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const today = /* @__PURE__ */ new Date();
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-sz7xmlte>
&copy; ${today.getFullYear()} Creado por Ember Drago
</footer> `;
}, "/home/alberto/ember-drago/cliente-1/src/components/Footer.astro", void 0);

export { $$Footer as $, $$Navbar as a, $$BaseHead as b, heroBg as h };
