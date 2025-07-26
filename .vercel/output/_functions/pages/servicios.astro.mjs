/* empty css                                 */
import { c as createAstro, a as createComponent, m as maybeRenderHead, g as addAttribute, r as renderTemplate, b as renderComponent } from '../chunks/astro/server_aGPWHd_y.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_CXwWeXT8.mjs';
import { b as $$BaseHead, h as heroBg } from '../chunks/Footer_Cn1fRBOe.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://tu-dominio.com");
const $$ServiceModal = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ServiceModal;
  const { service } = Astro2.props;
  return renderTemplate`<!-- Modal Overlay -->${maybeRenderHead()}<div class="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" @keydown.escape.window="$dispatch('close')" @click.self="$dispatch('close')"> <!-- Modal Content --> <div class="bg-white rounded-2xl shadow-2xl max-w-7xl w-full max-h-[95vh] overflow-y-auto" x-data="{
      activeTab: 'info',
      lightboxOpen: false,
      lightboxImage: '',
      lightboxIndex: 0,
      images: [],
      serviceTitle: ''
    }" x-init="images = JSON.parse($el.dataset.images); serviceTitle = $el.dataset.title;"${addAttribute(JSON.stringify((service.images || []).map((img) => typeof img === "string" ? img : img?.src || img)), "data-images")}${addAttribute(service.title, "data-title")} @click.stop> <!-- Header --> <div class="relative bg-gradient-to-r from-green-600 to-green-700 text-white p-6"> <button type="button" @click="$dispatch('close')" class="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors" aria-label="Cerrar modal"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> <h2 class="text-3xl font-bold mb-2 text-white">${service.title}</h2> <p class="text-green-100 text-lg">${service.description}</p> </div> <!-- Navigation Tabs --> <div class="bg-gradient-to-r from-purple-50 to-blue-50 px-6 py-6 border-b border-gray-200"> <nav class="grid grid-cols-2 gap-4" aria-label="Tabs"> <button @click="activeTab = 'info'" :class="activeTab === 'info' ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg scale-105 border-green-400' : 'bg-white text-gray-700 hover:text-green-600 hover:shadow-md hover:scale-102 border-gray-200'" class="w-full flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 border-2 transform"> <div class="flex items-center space-x-3"> <div :class="activeTab === 'info' ? 'bg-white/20' : 'bg-green-100'" class="p-2 rounded-lg"> <svg :class="activeTab === 'info' ? 'text-white' : 'text-green-600'" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> </div> <div class="text-left"> <div class="font-bold">DATOS PERSONALES</div> <div :class="activeTab === 'info' ? 'text-white/80' : 'text-gray-500'" class="text-xs">Información del servicio</div> </div> </div> </button> <button @click="activeTab = 'gallery'" :class="activeTab === 'gallery' ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg scale-105 border-green-400' : 'bg-white text-gray-700 hover:text-green-600 hover:shadow-md hover:scale-102 border-gray-200'" class="w-full flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 border-2 transform"> <div class="flex items-center space-x-3"> <div :class="activeTab === 'gallery' ? 'bg-white/20' : 'bg-green-100'" class="p-2 rounded-lg"> <svg :class="activeTab === 'gallery' ? 'text-white' : 'text-green-600'" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2 2v12a2 2 0 002 2z"></path> </svg> </div> <div class="text-left"> <div class="font-bold">DATOS DE LA TIENDA</div> <div :class="activeTab === 'gallery' ? 'text-white/80' : 'text-gray-500'" class="text-xs">Galería (<span x-text="images.length"></span> fotos)</div> </div> </div> </button> </nav> </div> <!-- Tab Content --> <div class="p-6"> <!-- Info Tab --> <div x-show="activeTab === 'info'" x-transition> <!-- Service Description --> <div class="mb-8"> <h3 class="text-xl font-semibold text-gray-900 mb-4">Descripción del Servicio</h3> <p class="text-gray-700 leading-relaxed text-lg">${service.longDescription || service.description}</p> </div> <!-- Features Grid --> ${service.features && service.features.length > 0 && renderTemplate`<div class="mb-8"> <h3 class="text-xl font-semibold text-gray-900 mb-4">¿Qué Incluye?</h3> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> ${service.features.map((feature) => renderTemplate`<div class="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg"> <svg class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span class="text-gray-700">${feature}</span> </div>`)} </div> </div>`} <!-- CTA --> <div class="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-8 text-white text-center"> <h3 class="text-2xl font-bold mb-4 text-white">¿Listo para comenzar?</h3> <p class="text-green-100 mb-6">Contáctanos hoy mismo para una cotización personalizada</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> <a href="/contacto" class="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
Solicitar Cotización
</a> <a href="tel:+1234567890" class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
Llamar Ahora
</a> </div> </div> </div> <!-- Gallery Tab --> <div x-show="activeTab === 'gallery'" x-transition> <div class="mb-6"> <h3 class="text-2xl font-bold text-gray-900 mb-2">Nuestros Trabajos Realizados</h3> <p class="text-gray-600">Explora nuestra galería de proyectos de mantenimiento de áreas verdes</p> </div> <!-- Gallery Masonry --> <div class="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4 mb-8"> <template x-for="(image, index) in images" :key="index"> <div class="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-lg bg-gray-100" @click="lightboxOpen = true; lightboxImage = image; lightboxIndex = index"> <img :src="image" :alt="\`Trabajo \${index + 1} - \${serviceTitle}\`" class="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.025]" loading="lazy"> <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center"> <svg class="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6M2 7a7 7 0 1114 0 7 7 0 01-14 0z"></path> </svg> </div> </div> </template> </div> <!-- Empty State --> <div x-show="!images || images.length === 0" class="text-center py-12"> <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path> </svg> <h3 class="mt-2 text-sm font-medium text-gray-900">No hay imágenes disponibles</h3> <p class="mt-1 text-sm text-gray-500">Pronto agregaremos fotos de nuestros trabajos realizados.</p> </div> </div> </div> <!-- Lightbox Modal --> <div x-show="lightboxOpen" x-transition.opacity class="fixed inset-0 z-[20000] bg-black/90 flex items-center justify-center p-4" @keydown.escape.window="lightboxOpen = false" @click.self="lightboxOpen = false"> <div class="relative max-w-4xl max-h-full"> <!-- Close Button --> <button @click="lightboxOpen = false" class="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"> <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> <!-- Navigation Buttons --> <button x-show="images.length > 1" @click="lightboxIndex = lightboxIndex > 0 ? lightboxIndex - 1 : images.length - 1; lightboxImage = (typeof images[lightboxIndex] === 'string' ? images[lightboxIndex] : images[lightboxIndex].src)" class="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-white transition-colors bg-black/60 hover:bg-black/80 rounded-full p-3 shadow-lg backdrop-blur-sm"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path> </svg> </button> <button x-show="images.length > 1" @click="lightboxIndex = lightboxIndex < images.length - 1 ? lightboxIndex + 1 : 0; lightboxImage = (typeof images[lightboxIndex] === 'string' ? images[lightboxIndex] : images[lightboxIndex].src)" class="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-white transition-colors bg-black/60 hover:bg-black/80 rounded-full p-3 shadow-lg backdrop-blur-sm"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </button> <!-- Image --> <img :src="lightboxImage" :alt="(typeof images[lightboxIndex] === 'object' && images[lightboxIndex].alt) ? images[lightboxIndex].alt : \`Imagen \${lightboxIndex + 1}\`" class="max-w-full max-h-full object-contain rounded-lg"> <!-- Image Counter --> <div x-show="images.length > 1" class="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm"> <span x-text="lightboxIndex + 1"></span> / <span x-text="images.length"></span> </div> </div> </div> </div> </div>`;
}, "/home/alberto/ember-drago/cliente-1/src/components/ServiceModal.astro", void 0);

const $$Astro = createAstro("https://tu-dominio.com");
const $$ServiceCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ServiceCard;
  const { service } = Astro2.props;
  return renderTemplate`<!-- Service Card with Alpine.js modal trigger -->${maybeRenderHead()}<article${addAttribute(service.id, "id")} role="group"${addAttribute(service.id + "-title", "aria-labelledby")} x-data="{ open: false }" x-on:close.window="open = false" class="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transform transition-all duration-300 overflow-hidden flex flex-col h-full hover:-translate-y-1 hover:ring-2 hover:ring-offset-2 hover:ring-green-500"> <!-- Card Image --> <div class="relative aspect-[4/3] overflow-hidden"> <img${addAttribute(service.images[0], "src")}${addAttribute(service.title, "alt")} loading="lazy" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"> <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div> <div class="absolute top-4 right-4"> <span class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/90 text-2xl shadow-lg"> ${service.icon} </span> </div> <div class="absolute bottom-0 left-0 right-0 p-6 text-white"> <h3${addAttribute(service.id + "-title", "id")} class="text-2xl text-white mb-2 font-black">${service.title}</h3> <p class="text-white/90 line-clamp-2">${service.description}</p> </div> </div> <!-- Card Body --> <div class="p-6 flex flex-col flex-grow"> <h4 class="font-semibold text-gray-800 mb-3 flex items-center"> <svg class="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg>
Incluye:
</h4> <ul class="space-y-1 mb-4 text-sm text-gray-600"> ${service.features.slice(0, 4).map((f) => renderTemplate`<li>• ${f}</li>`)} ${service.features.length > 4 && renderTemplate`<li class="text-green-500 font-medium">+${service.features.length - 4} más</li>`} </ul> <button @click="open = true" class="mt-auto px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600">
Ver Detalles
</button> <!-- Modal injected when open --> <!-- Modal teleported to <body>; hidden until 'open' is true --> <template x-teleport="body"> <div x-cloak x-show="open" style="display:none;"> ${renderComponent($$result, "ServiceModal", $$ServiceModal, { "service": service })} </div> </template> </div> </article>`;
}, "/home/alberto/ember-drago/cliente-1/src/components/ServiceCard.astro", void 0);

const rehabCover = new Proxy({"src":"/_astro/portada de techo.Dmi6EVTJ.jpg","width":2048,"height":2048,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/alberto/ember-drago/cliente-1/src/assets/servicios/REHABILITACIÓN DE TECHOS/portada de techo.jpg";
							}
							
							return target[name];
						}
					});

const rehab1 = new Proxy({"src":"/_astro/6-handyman.wHBH6GND.jpeg","width":1600,"height":1600,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/alberto/ember-drago/cliente-1/src/assets/servicios/REHABILITACIÓN DE TECHOS/1-REHABILITACIÓN DE TECHOS.jpeg";
							}
							
							return target[name];
						}
					});

const rehab2 = new Proxy({"src":"/_astro/2-REHABILITACIÓN DE TECHOS.CF-giKKt.jpeg","width":1600,"height":1600,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/alberto/ember-drago/cliente-1/src/assets/servicios/REHABILITACIÓN DE TECHOS/2-REHABILITACIÓN DE TECHOS.jpeg";
							}
							
							return target[name];
						}
					});

const rehab3 = new Proxy({"src":"/_astro/3-REHABILITACIÓN DE TECHOS.CACVh95x.jpeg","width":1600,"height":1600,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/alberto/ember-drago/cliente-1/src/assets/servicios/REHABILITACIÓN DE TECHOS/3-REHABILITACIÓN DE TECHOS.jpeg";
							}
							
							return target[name];
						}
					});

const rehab4 = new Proxy({"src":"/_astro/4-REHABILITACIÓN DE TECHOS.D_CygNsD.jpg","width":1152,"height":2048,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/alberto/ember-drago/cliente-1/src/assets/servicios/REHABILITACIÓN DE TECHOS/4-REHABILITACIÓN DE TECHOS.jpg";
							}
							
							return target[name];
						}
					});

const rehab5 = new Proxy({"src":"/_astro/5-REHABILITACIÓN DE TECHOS.C3haJVP8.jpeg","width":960,"height":960,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/alberto/ember-drago/cliente-1/src/assets/servicios/REHABILITACIÓN DE TECHOS/5-REHABILITACIÓN DE TECHOS.jpeg";
							}
							
							return target[name];
						}
					});

const rehab6 = new Proxy({"src":"/_astro/7-handyman.D5sjODjy.jpeg","width":1600,"height":1600,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/alberto/ember-drago/cliente-1/src/assets/servicios/REHABILITACIÓN DE TECHOS/6-REHABILITACIÓN DE TECHOS.jpeg";
							}
							
							return target[name];
						}
					});

const rehab7 = new Proxy({"src":"/_astro/8-handyman.BNgzfZk8.jpeg","width":1600,"height":1600,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/alberto/ember-drago/cliente-1/src/assets/servicios/REHABILITACIÓN DE TECHOS/7-REHABILITACIÓN DE TECHOS.jpeg";
							}
							
							return target[name];
						}
					});

const rehab8 = new Proxy({"src":"/_astro/portada-handyman.Dt_Psd6S.jpeg","width":1600,"height":1600,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/alberto/ember-drago/cliente-1/src/assets/servicios/REHABILITACIÓN DE TECHOS/8-REHABILITACIÓN DE TECHOS.jpeg";
							}
							
							return target[name];
						}
					});

const rehab9 = new Proxy({"src":"/_astro/9-REHABILITACIÓN DE TECHOS.D8E9FCnn.jpg","width":344,"height":500,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/alberto/ember-drago/cliente-1/src/assets/servicios/REHABILITACIÓN DE TECHOS/9-REHABILITACIÓN DE TECHOS.jpg";
							}
							
							return target[name];
						}
					});

const handymanCover = new Proxy({"src":"/_astro/portada-handyman.Dt_Psd6S.jpeg","width":1600,"height":1600,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/alberto/ember-drago/cliente-1/src/assets/servicios/Handyman/portada-handyman.jpeg";
							}
							
							return target[name];
						}
					});

const hm1 = new Proxy({"src":"/_astro/1-handyman.BbWtwSa8.jpeg","width":187,"height":269,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/alberto/ember-drago/cliente-1/src/assets/servicios/Handyman/1-handyman.jpeg";
							}
							
							return target[name];
						}
					});

const hm2 = new Proxy({"src":"/_astro/2-handyman.DBmLa29n.jpeg","width":168,"height":300,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/alberto/ember-drago/cliente-1/src/assets/servicios/Handyman/2-handyman.jpeg";
							}
							
							return target[name];
						}
					});

const hm3 = new Proxy({"src":"/_astro/3-handyman.BQA2M1ro.jpeg","width":168,"height":300,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/alberto/ember-drago/cliente-1/src/assets/servicios/Handyman/3-handyman.jpeg";
							}
							
							return target[name];
						}
					});

const hm4 = new Proxy({"src":"/_astro/4-handyman.DAXDQTne.jpg","width":626,"height":417,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/alberto/ember-drago/cliente-1/src/assets/servicios/Handyman/4-handyman.jpg";
							}
							
							return target[name];
						}
					});

const hm5 = new Proxy({"src":"/_astro/5-handyman.uUzqpjkO.jpeg","width":259,"height":194,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/alberto/ember-drago/cliente-1/src/assets/servicios/Handyman/5-handyman.jpeg";
							}
							
							return target[name];
						}
					});

const hm6 = new Proxy({"src":"/_astro/6-handyman.wHBH6GND.jpeg","width":1600,"height":1600,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/alberto/ember-drago/cliente-1/src/assets/servicios/Handyman/6-handyman.jpeg";
							}
							
							return target[name];
						}
					});

const hm7 = new Proxy({"src":"/_astro/7-handyman.D5sjODjy.jpeg","width":1600,"height":1600,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/alberto/ember-drago/cliente-1/src/assets/servicios/Handyman/7-handyman.jpeg";
							}
							
							return target[name];
						}
					});

const hm8 = new Proxy({"src":"/_astro/8-handyman.BNgzfZk8.jpeg","width":1600,"height":1600,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/alberto/ember-drago/cliente-1/src/assets/servicios/Handyman/8-handyman.jpeg";
							}
							
							return target[name];
						}
					});

const hm9 = new Proxy({"src":"/_astro/9-handyman.DAy2HdFK.jpeg","width":1600,"height":1600,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/alberto/ember-drago/cliente-1/src/assets/servicios/Handyman/9-handyman.jpeg";
							}
							
							return target[name];
						}
					});

const hm11 = new Proxy({"src":"/_astro/11-handyman.CcNtoXq4.jpeg","width":1600,"height":1600,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/alberto/ember-drago/cliente-1/src/assets/servicios/Handyman/11-handyman.jpeg";
							}
							
							return target[name];
						}
					});

const lavHero = new Proxy({"src":"/_astro/impermeabilizacionhero.Du8PnGU4.jpeg","width":1600,"height":1203,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/alberto/ember-drago/cliente-1/src/assets/servicios/Lavado y Impermeabilización de Techos/impermeabilizacionhero.jpeg";
							}
							
							return target[name];
						}
					});

const lav1 = new Proxy({"src":"/_astro/1-impermeabilizacion.Cm8nH_ZQ.jpeg","width":1600,"height":1600,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/alberto/ember-drago/cliente-1/src/assets/servicios/Lavado y Impermeabilización de Techos/1-impermeabilizacion.jpeg";
							}
							
							return target[name];
						}
					});

const lav2 = new Proxy({"src":"/_astro/servicio-techo.Djz5poaY.jpg","width":2048,"height":2048,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/alberto/ember-drago/cliente-1/src/assets/servicios/Lavado y Impermeabilización de Techos/2-impermeabilizacion.jpg";
							}
							
							return target[name];
						}
					});

const lav3 = new Proxy({"src":"/_astro/3-impermeabilizacion.Daux9Lxq.jpg","width":2048,"height":1536,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/alberto/ember-drago/cliente-1/src/assets/servicios/Lavado y Impermeabilización de Techos/3-impermeabilizacion.jpg";
							}
							
							return target[name];
						}
					});

const lav4 = new Proxy({"src":"/_astro/4-impermeabilizacion.DDxSDVQM.jpg","width":2048,"height":2048,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/alberto/ember-drago/cliente-1/src/assets/servicios/Lavado y Impermeabilización de Techos/4-impermeabilizacion.jpg";
							}
							
							return target[name];
						}
					});

const lav5 = new Proxy({"src":"/_astro/5-impermeabilizacion.Dnb-S0yZ.jpg","width":960,"height":540,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/alberto/ember-drago/cliente-1/src/assets/servicios/Lavado y Impermeabilización de Techos/5-impermeabilizacion.jpg";
							}
							
							return target[name];
						}
					});

const lav6 = new Proxy({"src":"/_astro/6-impermeabilizacion.C3SjjgRT.jpg","width":960,"height":960,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/alberto/ember-drago/cliente-1/src/assets/servicios/Lavado y Impermeabilización de Techos/6-impermeabilizacion.jpg";
							}
							
							return target[name];
						}
					});

const lav7 = new Proxy({"src":"/_astro/7-impermeabilizacion.BGs5jbB8.jpeg","width":2048,"height":2048,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/alberto/ember-drago/cliente-1/src/assets/servicios/Lavado y Impermeabilización de Techos/7-impermeabilizacion.jpeg";
							}
							
							return target[name];
						}
					});

const lav8 = new Proxy({"src":"/_astro/8-impermeabilizacion.BIgP9IlV.jpg","width":1080,"height":1920,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/alberto/ember-drago/cliente-1/src/assets/servicios/Lavado y Impermeabilización de Techos/8-impermeabilizacion.jpg";
							}
							
							return target[name];
						}
					});

const lav10 = new Proxy({"src":"/_astro/10-impermeabilizacion.Ai4UNIR7.jpeg","width":1536,"height":2048,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/alberto/ember-drago/cliente-1/src/assets/servicios/Lavado y Impermeabilización de Techos/10-impermeabilizacion.jpeg";
							}
							
							return target[name];
						}
					});

const lav11 = new Proxy({"src":"/_astro/11-impermeabilizacion.Cva2WkVD.jpeg","width":2048,"height":2048,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/alberto/ember-drago/cliente-1/src/assets/servicios/Lavado y Impermeabilización de Techos/11-impermeabilizacion.jpeg";
							}
							
							return target[name];
						}
					});

const areasVerdesPortada = new Proxy({"src":"/_astro/areas-verdes-portada.iP-glihl.jpeg","width":540,"height":690,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/alberto/ember-drago/cliente-1/src/assets/servicios/areas-verdes/areas-verdes-portada.jpeg";
							}
							
							return target[name];
						}
					});

const areasVerdes01 = new Proxy({"src":"/_astro/areas-verdes-01.IUWvjFua.jpeg","width":1600,"height":1600,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/alberto/ember-drago/cliente-1/src/assets/servicios/areas-verdes/areas-verdes-01.jpeg";
							}
							
							return target[name];
						}
					});

const areasVerdes02 = new Proxy({"src":"/_astro/areas-verdes-02.C6222N0a.jpeg","width":960,"height":960,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/alberto/ember-drago/cliente-1/src/assets/servicios/areas-verdes/areas-verdes-02.jpeg";
							}
							
							return target[name];
						}
					});

const areasVerdes03 = new Proxy({"src":"/_astro/areas-verdes-03.BY0XagZg.jpeg","width":1600,"height":1600,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/alberto/ember-drago/cliente-1/src/assets/servicios/areas-verdes/areas-verdes-03.jpeg";
							}
							
							return target[name];
						}
					});

const areasVerdes04 = new Proxy({"src":"/_astro/areas-verdes-04.CSTrZGr1.jpeg","width":1600,"height":1600,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/alberto/ember-drago/cliente-1/src/assets/servicios/areas-verdes/areas-verdes-04.jpeg";
							}
							
							return target[name];
						}
					});

const areasVerdes05 = new Proxy({"src":"/_astro/areas-verdes-05.CBBO9Vhg.jpeg","width":2048,"height":2048,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/alberto/ember-drago/cliente-1/src/assets/servicios/areas-verdes/areas-verdes-05.jpeg";
							}
							
							return target[name];
						}
					});

const areasVerdes06 = new Proxy({"src":"/_astro/areas-verdes-06._nD3yLaG.jpeg","width":1152,"height":2048,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/alberto/ember-drago/cliente-1/src/assets/servicios/areas-verdes/areas-verdes-06.jpeg";
							}
							
							return target[name];
						}
					});

const areasVerdes07 = new Proxy({"src":"/_astro/areas-verdes-07.CmUsAab1.jpeg","width":2048,"height":2048,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/alberto/ember-drago/cliente-1/src/assets/servicios/areas-verdes/areas-verdes-07.jpeg";
							}
							
							return target[name];
						}
					});

const areasVerdes08 = new Proxy({"src":"/_astro/areas-verdes-08.DlcEciCA.jpeg","width":2048,"height":2048,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/alberto/ember-drago/cliente-1/src/assets/servicios/areas-verdes/areas-verdes-08.jpeg";
							}
							
							return target[name];
						}
					});

const areasVerdes09 = new Proxy({"src":"/_astro/areas-verdes-09.CaKYzHSD.jpeg","width":2048,"height":2048,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/alberto/ember-drago/cliente-1/src/assets/servicios/areas-verdes/areas-verdes-09.jpeg";
							}
							
							return target[name];
						}
					});

const areasVerdes10 = new Proxy({"src":"/_astro/areas-verdes-10.CY1QupSm.jpeg","width":2048,"height":2048,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/alberto/ember-drago/cliente-1/src/assets/servicios/areas-verdes/areas-verdes-10.jpeg";
							}
							
							return target[name];
						}
					});

const areasVerdes11 = new Proxy({"src":"/_astro/areas-verdes-11.fVuYGsRB.jpeg","width":1600,"height":1600,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/alberto/ember-drago/cliente-1/src/assets/servicios/areas-verdes/areas-verdes-11.jpeg";
							}
							
							return target[name];
						}
					});

const areasVerdes12 = new Proxy({"src":"/_astro/areas-verdes-12.BM_gRV88.jpeg","width":900,"height":1600,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/alberto/ember-drago/cliente-1/src/assets/servicios/areas-verdes/areas-verdes-12.jpeg";
							}
							
							return target[name];
						}
					});

const areasVerdes13 = new Proxy({"src":"/_astro/areas-verdes-13.Bknho_mr.jpeg","width":1600,"height":1600,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/alberto/ember-drago/cliente-1/src/assets/servicios/areas-verdes/areas-verdes-13.jpeg";
							}
							
							return target[name];
						}
					});

const areasVerdes14 = new Proxy({"src":"/_astro/areas-verdes-14.CfZGvCE1.jpeg","width":1600,"height":1600,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/alberto/ember-drago/cliente-1/src/assets/servicios/areas-verdes/areas-verdes-14.jpeg";
							}
							
							return target[name];
						}
					});

const areasVerdes15 = new Proxy({"src":"/_astro/areas-verdes-15.Cclg1o4m.jpeg","width":1600,"height":1600,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/alberto/ember-drago/cliente-1/src/assets/servicios/areas-verdes/areas-verdes-15.jpeg";
							}
							
							return target[name];
						}
					});

const areasVerdes16 = new Proxy({"src":"/_astro/servicio-matas.d2V7T6ve.jpeg","width":1600,"height":1600,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/alberto/ember-drago/cliente-1/src/assets/servicios/areas-verdes/areas-verdes-16.jpeg";
							}
							
							return target[name];
						}
					});

const areasVerdes17 = new Proxy({"src":"/_astro/areas-verdes-17.2OefFUOu.jpeg","width":1200,"height":900,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/alberto/ember-drago/cliente-1/src/assets/servicios/areas-verdes/areas-verdes-17.jpeg";
							}
							
							return target[name];
						}
					});

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Servicios = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "Servicios | Jonathan Roofing & Landscaping";
  const pageDescription = "Descubre nuestro cat\xE1logo de servicios: mantenimiento de \xE1reas verdes, limpieza e impermeabilizaci\xF3n de techos, pintura y handyman. Calidad garantizada en Puerto Rico.";
  const allServices = [
    {
      id: "areas-verdes",
      title: "Mantenimiento de \xC1reas Verdes",
      icon: "\u{1F33F}",
      description: "Transformamos tus espacios exteriores en \xE1reas verdes saludables, vibrantes y bien cuidadas.",
      fullDescription: "En Jonathan Roofing and Landscaping, transformamos tus espacios exteriores en \xE1reas verdes saludables, vibrantes y bien cuidadas, adaptadas al clima tropical de Puerto Rico.",
      images: [
        areasVerdesPortada.src,
        areasVerdes17.src,
        areasVerdes01.src,
        areasVerdes02.src,
        areasVerdes03.src,
        areasVerdes04.src,
        areasVerdes05.src,
        areasVerdes06.src,
        areasVerdes07.src,
        areasVerdes08.src,
        areasVerdes09.src,
        areasVerdes10.src,
        areasVerdes11.src,
        areasVerdes12.src,
        areasVerdes13.src,
        areasVerdes14.src,
        areasVerdes15.src,
        areasVerdes16.src
      ],
      features: [
        "Corte profesional de grama",
        "Equipos STIHL, ECHO, BERNARD",
        "Poda t\xE9cnica de \xE1rboles y arbustos",
        "Control de malezas y fertilizaci\xF3n",
        "Dise\xF1o de jardines resistentes al clima",
        "Mantenimiento preventivo contra plagas"
      ],
      whyChooseUs: [
        "Experiencia local en especies nativas",
        "Equipos industriales ILLEGNO y OBERNARD",
        "Soluciones r\xE1pidas y duraderas"
      ],
      additionalInfo: "\u{1F331} \xA1Transforma tu jard\xEDn en un oasis tropical!"
    },
    {
      id: "lavado-techos",
      title: "Lavado & Impermeabilizaci\xF3n de Techos",
      icon: "\u{1F9FC}",
      description: "Paquete todo-en-uno que alarga la vida de su techo: limpieza + sellado premium.",
      fullDescription: "Limpieza profunda que protege y prolonga la vida \xFAtil de su techo, seguida de un sellado flexible resistente a huracanes.",
      images: [
        lavHero.src,
        lav1.src,
        lav2.src,
        lav3.src,
        lav4.src,
        lav5.src,
        lav6.src,
        lav7.src,
        lav8.src,
        lav10.src,
        lav11.src
      ],
      features: [
        "Eliminaci\xF3n de musgo, algas y residuos",
        "Materiales premium: Eterna Undersystem y Marin Membrana.",
        "Uso de t\xE9cnicas ecol\xF3gicas (sin qu\xEDmicos agresivos)",
        "Sellado premium con garant\xEDa",
        "Protecci\xF3n UV y resistencia a huracanes"
      ],
      additionalInfo: "\u{1F327} Prevenga filtraciones con mantenimiento anual"
    },
    {
      id: "pintura",
      title: "SISTEMAS DE AGUA",
      icon: "\u{1F3A8}",
      description: "Soluciones expertas para proteger tu propiedad de filtraciones y da\xF1os por humedad",
      fullDescription: "Reconstruimos la integridad de su techos y sistemas de drenaje con t\xE9cnicas probadas que incluye: * Sellado profesional de goteras y grietas con materiales Eterna/Marin Membrana *Zabaleta *Reparaci\xF3n de canalones (evita inundaciones en paredes) *Minimizaci\xF3n de emposamientos con nivelaci\xF3n precisa *Destape de desag\xFCes obstruidos (m\xE9todos manuales y mec\xE1nicos)",
      images: [
        rehabCover.src,
        rehab1.src,
        rehab2.src,
        rehab3.src,
        rehab4.src,
        rehab5.src,
        rehab6.src,
        rehab7.src,
        rehab8.src,
        rehab9.src
      ],
      features: [
        "Sellado profesional de goteras y grietas con materiales Eterna/Marin Membrana",
        "Zabaleta",
        "Reparaci\xF3n de canalones (evita inundaciones en paredes)",
        "Minimizaci\xF3n de emposamientos con nivelaci\xF3n precisa",
        "Destape de desag\xFCes obstruidos (m\xE9todos manuales y mec\xE1nicos)"
      ],
      additionalInfo: "\u{1F58C} Transformamos sus paredes en 48 horas"
    },
    {
      id: "handyman",
      title: "Handyman (Reparaciones y Obras Menores)",
      icon: "\u{1F6E0}",
      description: "Soluciones r\xE1pidas y pr\xE1cticas para mantener tu propiedad en \xF3ptimas condiciones.",
      fullDescription: 'Ofrecemos un servicio completo de handyman para resolver todas esas necesidades cotidianas con profesionalismo y eficiencia. "\xA1No importa qu\xE9 necesites arreglar o mover, nosotros lo hacemos por ti!"',
      images: [
        handymanCover.src,
        hm1.src,
        hm2.src,
        hm3.src,
        hm4.src,
        hm5.src,
        hm6.src,
        hm7.src,
        hm8.src,
        hm9.src,
        hm11.src
      ],
      features: [
        "Reparaciones de cerraduras y seguridad",
        "Pintura interior/exterior con acabados perfectos",
        "Mudanzas locales (traslado seguro y organizado)",
        "Peque\xF1as remodelaciones y arreglos generales"
      ],
      additionalInfo: "\xA1No importa qu\xE9 necesites arreglar o mover, nosotros lo hacemos por ti!"
    }
  ];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle, "description": pageDescription }, { "default": ($$result2) => renderTemplate`    ${maybeRenderHead()}<section aria-label="Hero: Servicios" class="relative isolate overflow-hidden h-[80vh] flex items-center justify-center text-center text-white"> <img${addAttribute(heroBg.src, "src")} alt="Servicios" class="absolute inset-0 -z-10 h-full w-full object-cover"> <div class="absolute inset-0 -z-10 bg-gradient-to-br from-black/80 via-black/50 to-black/80"></div> <div class="px-6"> <span class="inline-block mb-4 rounded-full bg-yellow-500/20 px-4 py-1 text-sm font-semibold uppercase tracking-wider text-yellow-300 backdrop-blur-sm">Lo que hacemos</span> <h1 class="text-4xl md:text-6xl font-bold mb-6 leading-tight">Nuestros <span class="text-yellow-400">Servicios</span></h1> <p class="text-lg md:text-2xl mb-8 max-w-2xl mx-auto !text-white">Soluciones integrales de mantenimiento y mejoras para tu hogar o negocio.</p> <a href="#lista" class="inline-flex items-center gap-2 rounded-full bg-yellow-500 px-8 py-4 font-semibold text-gray-900 shadow-lg hover:bg-yellow-400 transition">
Ver Servicios
<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg> </a> </div> <svg class="absolute bottom-0 left-0 w-full h-16 -z-10 text-white" viewBox="0 0 1440 320"><path fill="currentColor" d="M0,160L80,176C160,192,320,224,480,240C640,256,800,256,960,240C1120,224,1280,192,1360,176L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg> </section>  <section id="lista" role="region" aria-labelledby="services-list-heading" class="py-20 bg-gray-50"> <h2 id="services-list-heading" class="sr-only">Listado de Servicios</h2> <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8"> ${allServices.map((service) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "service": service })}`)} </div> </section> `, "head": ($$result2) => renderTemplate(_a || (_a = __template(["", '<script type="application/ld+json">{JSON.stringify({\n    "@context": "https://schema.org",\n    "@type": "LocalBusiness",\n    "name": "Jonathan Roofing & Landscaping",\n    "image": "https://jonathanroofing.com/logo.png",\n    "@id": "https://jonathanroofing.com/",\n    "url": "https://jonathanroofing.com/servicios",\n    "telephone": "+1 787-123-4567",\n    "address": {\n      "@type": "PostalAddress",\n      "streetAddress": "Barranquitas",\n      "addressLocality": "Barranquitas",\n      "addressRegion": "PR",\n      "postalCode": "00794",\n      "addressCountry": "PR"\n    },\n    "description": "Servicios de mantenimiento, techado, impermeabilizaci\xF3n y \xE1reas verdes en Puerto Rico. 10 a\xF1os de experiencia.",\n    "areaServed": "Puerto Rico",\n    "openingHours": "Mo-Sa 08:00-18:00",\n    "priceRange": "$",\n    "makesOffer": [\n      {\n        "@type": "Offer",\n        "itemOffered": {\n          "@type": "Service",\n          "name": "Impermeabilizaci\xF3n de Techos",\n          "description": "Limpieza profunda y sellado profesional de techos."\n        }\n      },\n      {\n        "@type": "Offer",\n        "itemOffered": {\n          "@type": "Service",\n          "name": "Corte de Grama y Jardiner\xEDa",\n          "description": "Mantenimiento y embellecimiento de \xE1reas verdes."\n        }\n      },\n      {\n        "@type": "Offer",\n        "itemOffered": {\n          "@type": "Service",\n          "name": "SISTEMAS DE AGUA",\n          "description": "Reconstruimos la integridad de su techos y sistemas de drenaje con t\xE9cnicas probadas que incluye: Sellado profesional de goteras y grietas con materiales Eterna/Marin Membrana, Zabaleta, Reparaci\xF3n de canalones (evita inundaciones en paredes), Minimizaci\xF3n de emposamientos con nivelaci\xF3n precisa, Destape de desag\xFCes obstruidos (m\xE9todos manuales y mec\xE1nicos)"\n        }\n      },\n      {\n        "@type": "Offer",\n        "itemOffered": {\n          "@type": "Service",\n          "name": "Handyman (Reparaciones y Obras Menores)",\n          "description": "Soluciones r\xE1pidas y pr\xE1cticas para mantener tu propiedad en \xF3ptimas condiciones."\n        }\n      }\n    ]\n  }, null, 2)}<\/script>'])), renderComponent($$result2, "BaseHead", $$BaseHead, { "title": pageTitle, "description": pageDescription, "image": heroBg, "slot": "head" })) })}`;
}, "/home/alberto/ember-drago/cliente-1/src/pages/servicios.astro", void 0);

const $$file = "/home/alberto/ember-drago/cliente-1/src/pages/servicios.astro";
const $$url = "/servicios";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Servicios,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
