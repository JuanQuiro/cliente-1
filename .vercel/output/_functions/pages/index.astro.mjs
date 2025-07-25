/* empty css                                 */
import { a as createComponent, r as renderTemplate, b as renderComponent, n as defineScriptVars, g as addAttribute, m as maybeRenderHead, f as renderScript } from '../chunks/astro/server_aGPWHd_y.mjs';
import 'kleur/colors';
import { b as $$BaseHead } from '../chunks/Footer_Cn1fRBOe.mjs';
import { $ as $$MainLayout } from '../chunks/MainLayout_CXwWeXT8.mjs';
import { c as getImage } from '../chunks/_astro_assets_wLGvh_1A.mjs';
import { _ as __ASTRO_IMAGE_IMPORT_ZF3woP } from '../chunks/hero-uno_WNPyFNAd.mjs';
import { a as __ASTRO_IMAGE_IMPORT_r2Pe5, _ as __ASTRO_IMAGE_IMPORT_Z1NgFjg } from '../chunks/hero-tres_JNswNaML.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const corteImg = new Proxy({"src":"/_astro/servicio-matas.d2V7T6ve.jpeg","width":1600,"height":1600,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/alberto/ember-drago/cliente-1/src/assets/image-hero-index/servicio-matas.jpeg";
							}
							
							return target[name];
						}
					});

const techoImg = new Proxy({"src":"/_astro/servicio-techo.Djz5poaY.jpg","width":2048,"height":2048,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/alberto/ember-drago/cliente-1/src/assets/image-hero-index/servicio-techo.jpg";
							}
							
							return target[name];
						}
					});

const pinturaImg = new Proxy({"src":"/_astro/portada-handyman.Dt_Psd6S.jpeg","width":1600,"height":1600,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/alberto/ember-drago/cliente-1/src/assets/image-hero-index/servicio-pinturo.jpeg";
							}
							
							return target[name];
						}
					});

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const heroImageOptimized1 = await getImage({ src: __ASTRO_IMAGE_IMPORT_ZF3woP, format: "webp", quality: 90, width: 1920, height: 1080 });
  const heroImageOptimized2 = await getImage({ src: __ASTRO_IMAGE_IMPORT_r2Pe5, format: "webp", quality: 90, width: 1920, height: 1080 });
  const heroImageOptimized3 = await getImage({ src: __ASTRO_IMAGE_IMPORT_Z1NgFjg, format: "webp", quality: 90, width: 1920, height: 1080 });
  const heroImages = [heroImageOptimized1.src, heroImageOptimized2.src, heroImageOptimized3.src];
  const firstHero = heroImages[0];
  const pageTitle = "Jonathan Roofing & Landscaping | Mantenimiento Integral en Puerto Rico";
  const pageDescription = "Expertos en mantenimiento de \xE1reas verdes, limpieza e impermeabilizaci\xF3n de techos y soluciones handyman. \xA1Transformamos tu espacio con 10 a\xF1os de experiencia local!";
  return renderTemplate(_a || (_a = __template(["<!-- Critical: Immediate hero display script --><script>(function(){", `
// This script runs IMMEDIATELY to prevent any blank hero screen
window.heroImages = heroImages;
(function() {
  // Set hero background immediately when DOM is ready
  function ensureHeroDisplay() {
    const hero = document.querySelector('.hero');
    if (hero) {
      // Ensure the hero has immediate visual content
      hero.style.backgroundImage = "url('" + heroImages[0] + "')";
      hero.style.backgroundSize = 'cover';
      hero.style.backgroundPosition = 'center';
      hero.style.backgroundRepeat = 'no-repeat';
      console.log('\u26A1 Hero background set immediately');
    }
  }
  
  // Execute immediately if DOM is ready, otherwise wait for it
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ensureHeroDisplay);
  } else {
    ensureHeroDisplay();
  }
})();
})();<\/script> `, ""])), defineScriptVars({ heroImages }), renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle, "description": pageDescription, "data-astro-cid-j7pv25f6": true }, { "default": async ($$result2) => renderTemplate`          ${maybeRenderHead()}<section aria-label="Hero: Mantenimiento Integral" class="hero"${addAttribute(`background-image: url('${firstHero}')`, "style")} data-astro-cid-j7pv25f6> <!-- Dark gradient overlay for better text readability --> <div class="hero-overlay" data-astro-cid-j7pv25f6></div> <div class="container" data-astro-cid-j7pv25f6> <div class="hero-content" data-astro-cid-j7pv25f6> <h1 class="hero-title" data-astro-cid-j7pv25f6><span class="text-green" data-astro-cid-j7pv25f6>Servicios de Mantenimiento</span> <span class="text-yellow" data-astro-cid-j7pv25f6>Residencial y Comercial</span></h1> <p class="tagline !text-white !font-semibold" data-astro-cid-j7pv25f6>Instaladores expertos en techado y paisajismo a su servicio. Obtenga más información sobre nuestros servicios y comience hoy mismo.</p> <div class="hero-buttons" data-astro-cid-j7pv25f6> <a href="/servicios" class="btn btn-primary hover:text-black" data-astro-cid-j7pv25f6>Nuestros Servicios</a> <a href="/contacto" class="btn btn-outline" data-astro-cid-j7pv25f6>Solicitar Cotización</a> </div> </div> </div> <!-- Slider Navigation --> <div class="slider-nav" data-astro-cid-j7pv25f6> <button class="slider-arrow slider-arrow-prev" aria-label="Previous slide" data-astro-cid-j7pv25f6> <i class="fas fa-chevron-left" data-astro-cid-j7pv25f6></i> </button> <button class="slider-arrow slider-arrow-next" aria-label="Next slide" data-astro-cid-j7pv25f6> <i class="fas fa-chevron-right" data-astro-cid-j7pv25f6></i> </button> </div> <div class="slider-dots" data-astro-cid-j7pv25f6></div> <!-- Slider Progress Bar --> <div class="slider-progress" data-astro-cid-j7pv25f6> <div class="slider-progress-bar" data-astro-cid-j7pv25f6></div> </div> </section>  <section id="about" aria-labelledby="about-section-heading" class="about-section" data-astro-cid-j7pv25f6> <h2 id="about-section-heading" class="sr-only" data-astro-cid-j7pv25f6>Sobre Nosotros</h2> <div class="container about-grid" data-astro-cid-j7pv25f6> <!-- Card Sobre Nosotros --> <div class="about-card" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6><span class="highlight" data-astro-cid-j7pv25f6>SOBRE NOSOTROS</span></h3> <p data-astro-cid-j7pv25f6><em data-astro-cid-j7pv25f6>En Jonathan Roofing & Landscaping, no solo mejoramos espacios exteriores, ¡los reinventamos!</em></p> <p data-astro-cid-j7pv25f6>Somos su aliado confiable en Puerto Rico para transformar techos, jardines y hogares con soluciones integrales que unen durabilidad y belleza.</p> <div class="mt-6 space-y-4" data-astro-cid-j7pv25f6> <!-- Bloque áreas verdes --> <div class="service-block" data-astro-cid-j7pv25f6> <h4 class="text-lg font-semibold flex items-center gap-2" data-astro-cid-j7pv25f6><i class="fas fa-seedling text-green-600" data-astro-cid-j7pv25f6></i>Mantenimiento de Áreas Verdes de Precisión</h4> <ul class="list-disc list-inside ml-5 text-sm" data-astro-cid-j7pv25f6> <li data-astro-cid-j7pv25f6>Equipos STIHL, ECHO, BERNARD</li> </ul> </div> <!-- Bloque sellado de techos --> <div class="service-block" data-astro-cid-j7pv25f6> <h4 class="text-lg font-semibold flex items-center gap-2" data-astro-cid-j7pv25f6><i class="fas fa-water text-blue-600" data-astro-cid-j7pv25f6></i>Sellado de Techos</h4> <ul class="list-disc list-inside ml-5 text-sm" data-astro-cid-j7pv25f6> <li data-astro-cid-j7pv25f6>Materiales premium: Eterna Undersystem y Marin Membrana</li> </ul> </div> <!-- Bloque servicios extra --> <div class="service-block" data-astro-cid-j7pv25f6> <h4 class="text-lg font-semibold flex items-center gap-2" data-astro-cid-j7pv25f6><i class="fas fa-tools text-yellow-600" data-astro-cid-j7pv25f6></i>Servicios que Van Más Allá</h4> <ul class="list-disc list-inside ml-5 text-sm space-y-1" data-astro-cid-j7pv25f6> <li data-astro-cid-j7pv25f6>Pintura que revitaliza fachadas</li> <li data-astro-cid-j7pv25f6>Mudanzas sin estrés</li> <li data-astro-cid-j7pv25f6>Soluciones handyman con acabados perfectos, entre otros</li> </ul> </div> </div> </div> <!-- Beneficios directos --> <div class="benefit-card" data-astro-cid-j7pv25f6> <i class="fas fa-map-marker-alt icon" data-astro-cid-j7pv25f6></i> <h4 data-astro-cid-j7pv25f6>Experiencia Local</h4> <p data-astro-cid-j7pv25f6>10 años sirviendo a comunidades puertorriqueñas y conocimiento profundo de sus necesidades climáticas y estructurales.</p> </div> <div class="benefit-card" data-astro-cid-j7pv25f6> <i class="fas fa-check-circle icon" data-astro-cid-j7pv25f6></i> <h4 data-astro-cid-j7pv25f6>Calidad Garantizada</h4> <p data-astro-cid-j7pv25f6>Equipos industriales y materiales premium; sellado de techos con garantía incluida.</p> </div> <div class="benefit-card" data-astro-cid-j7pv25f6> <i class="fas fa-tools icon" data-astro-cid-j7pv25f6></i> <h4 data-astro-cid-j7pv25f6>Soluciones Prácticas</h4> <p data-astro-cid-j7pv25f6>Resolución eficiente de problemas (empozamientos, grietas, jardines descuidados) y mantenimiento preventivo para ahorrar costos.</p> </div> <div class="benefit-card" data-astro-cid-j7pv25f6> <i class="fas fa-headset icon" data-astro-cid-j7pv25f6></i> <h4 data-astro-cid-j7pv25f6>Atención al Cliente</h4> <p data-astro-cid-j7pv25f6>Servicio cercano y dedicado, adaptado a las necesidades de cada proyecto.</p> </div> </div> </section>  <section class="featured-services" data-astro-cid-j7pv25f6> <div class="container " data-astro-cid-j7pv25f6> <div class="section-header " data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>Nuestros Servicios</h2> <p data-astro-cid-j7pv25f6>Ofrecemos una amplia gama de servicios profesionales para satisfacer todas tus necesidades de mantenimiento.</p> </div> <div class="services-grid " data-astro-cid-j7pv25f6> <a href="/servicios#areas-verdes" class="service-card" data-astro-cid-j7pv25f6> <div class="service-thumb" data-astro-cid-j7pv25f6> <img${addAttribute(corteImg.src, "src")} alt="Corte de Grama" loading="lazy" style="aspect-ratio: 16/9; object-fit: cover; border-radius: 8px;" data-astro-cid-j7pv25f6> </div> <div class="service-content" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>Corte de Grama</h3> <p data-astro-cid-j7pv25f6>Mantenimiento profesional de jardines y áreas verdes para mantener tu espacio exterior impecable.</p> </div> </a> <a href="/servicios#lavado-techos" class="service-card" data-astro-cid-j7pv25f6> <div class="service-thumb" data-astro-cid-j7pv25f6> <img${addAttribute(techoImg.src, "src")} alt="Limpieza de Techos" loading="lazy" style="aspect-ratio: 16/9; object-fit: cover; border-radius: 8px;" data-astro-cid-j7pv25f6> </div> <div class="service-content" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>Limpieza de Techos</h3> <p data-astro-cid-j7pv25f6>Eliminación de musgo, hojas y suciedad para prolongar la vida útil de tu techo.</p> </div> </a> <a href="/servicios#pintura" class="service-card" data-astro-cid-j7pv25f6> <div class="service-thumb" data-astro-cid-j7pv25f6> <img${addAttribute(pinturaImg.src, "src")} alt="Pintura Profesional" loading="lazy" style="aspect-ratio: 16/9; object-fit: cover; border-radius: 8px;" data-astro-cid-j7pv25f6> </div> <div class="service-content" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>Pintura Profesional</h3> <p data-astro-cid-j7pv25f6>Transforma tus espacios con nuestro servicio de pintura de la más alta calidad.</p> </div> </a> </div> <div class="text-center mt-8" data-astro-cid-j7pv25f6> <a href="/servicios" class="btn btn-primary" data-astro-cid-j7pv25f6>Ver más servicios</a> </div> </div> </section>  <section class="cta-banner" data-astro-cid-j7pv25f6><div class="container" data-astro-cid-j7pv25f6> <h2 class="text-white mr-6" data-astro-cid-j7pv25f6>¿Listo para transformar tu espacio?</h2> <a href="/contacto" class="btn btn-primary" data-astro-cid-j7pv25f6>Solicita tu Cotización Gratis</a> </div> </section>  <section class="contact-section" data-astro-cid-j7pv25f6> <div class="container" data-astro-cid-j7pv25f6> <div class="contact-grid" data-astro-cid-j7pv25f6> <div class="contact-info" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>Contáctanos</h2> <p data-astro-cid-j7pv25f6>¿Tienes alguna pregunta o necesitas más información? Estamos aquí para ayudarte.</p> <div class="info-item" data-astro-cid-j7pv25f6> <div class="info-icon" data-astro-cid-j7pv25f6> <i class="fas fa-phone" data-astro-cid-j7pv25f6></i> </div> <div class="info-content" data-astro-cid-j7pv25f6> <h4 data-astro-cid-j7pv25f6>Teléfono</h4> <a href="tel:+19392634528" data-astro-cid-j7pv25f6>+1 (939) 263-4528</a> </div> </div> <div class="info-item" data-astro-cid-j7pv25f6> <div class="info-icon" data-astro-cid-j7pv25f6> <i class="fas fa-envelope" data-astro-cid-j7pv25f6></i> </div> <div class="info-content" data-astro-cid-j7pv25f6> <h4 data-astro-cid-j7pv25f6>Correo electrónico</h4> <a href="mailto:jonathanroofingandlandscaping@gmail.com" data-astro-cid-j7pv25f6>jonathanroofingandlandscaping@gmail.com</a> </div> </div> <div class="info-item" data-astro-cid-j7pv25f6> <div class="info-icon" data-astro-cid-j7pv25f6> <i class="fas fa-map-marker-alt" data-astro-cid-j7pv25f6></i> </div> <div class="info-content" data-astro-cid-j7pv25f6> <h4 data-astro-cid-j7pv25f6>Dirección</h4> <p data-astro-cid-j7pv25f6>Barranquitas, Puerto Rico</p> </div> </div> <div class="social-links" data-astro-cid-j7pv25f6> <a href="https://www.facebook.com/share/v/1CGUbDV77U/?mibextid=wwXIfr" class="social-link" aria-label="Facebook" data-astro-cid-j7pv25f6> <i class="fab fa-facebook-f" data-astro-cid-j7pv25f6></i> </a> <a class="hidden" href="#" class="social-link" aria-label="Instagram" data-astro-cid-j7pv25f6> <i class="fab fa-instagram" data-astro-cid-j7pv25f6></i> </a> <a href="http://wa.link/tx3x9f" class="social-link" aria-label="WhatsApp" data-astro-cid-j7pv25f6> <i class="fab fa-whatsapp" data-astro-cid-j7pv25f6></i> </a> </div> </div> <div class="map-container" data-astro-cid-j7pv25f6> <div id="map" data-astro-cid-j7pv25f6></div> <div class="map-overlay" data-astro-cid-j7pv25f6> <i class="fas fa-map-marker-alt" data-astro-cid-j7pv25f6></i> <span data-astro-cid-j7pv25f6>Nuestra ubicación</span> </div> </div> </div> </div> </section>  ${renderScript($$result2, "/home/alberto/ember-drago/cliente-1/src/pages/index.astro?astro&type=script&index=0&lang.ts")} ${renderScript($$result2, "/home/alberto/ember-drago/cliente-1/src/pages/index.astro?astro&type=script&index=1&lang.ts")}`, "head": async ($$result2) => renderTemplate`${renderComponent($$result2, "BaseHead", $$BaseHead, { "title": pageTitle, "description": pageDescription, "image": __ASTRO_IMAGE_IMPORT_ZF3woP, "slot": "head", "data-astro-cid-j7pv25f6": true })}<link rel="preload" as="image"${addAttribute(firstHero, "href")} fetchpriority="high"><link rel="prefetch" as="image"${addAttribute(heroImages[1], "href")}><link rel="prefetch" as="image"${addAttribute(heroImages[2], "href")}><meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">` }));
}, "/home/alberto/ember-drago/cliente-1/src/pages/index.astro", void 0);

const $$file = "/home/alberto/ember-drago/cliente-1/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
