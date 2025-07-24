import 'kleur/colors';
import { l as decodeKey } from './chunks/astro/server_aGPWHd_y.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_CmVPhc-M.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/alberto/ember-drago/cliente-1/","cacheDir":"file:///home/alberto/ember-drago/cliente-1/node_modules/.astro/","outDir":"file:///home/alberto/ember-drago/cliente-1/dist/","srcDir":"file:///home/alberto/ember-drago/cliente-1/src/","publicDir":"file:///home/alberto/ember-drago/cliente-1/public/","buildClientDir":"file:///home/alberto/ember-drago/cliente-1/dist/client/","buildServerDir":"file:///home/alberto/ember-drago/cliente-1/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"contacto/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contacto","isIndex":false,"type":"page","pattern":"^\\/contacto\\/?$","segments":[[{"content":"contacto","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contacto.astro","pathname":"/contacto","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"nosotros/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/nosotros","isIndex":false,"type":"page","pattern":"^\\/nosotros\\/?$","segments":[[{"content":"nosotros","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/nosotros.astro","pathname":"/nosotros","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"rss.xml","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"servicios/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/servicios","isIndex":false,"type":"page","pattern":"^\\/servicios\\/?$","segments":[[{"content":"servicios","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/servicios.astro","pathname":"/servicios","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/contact","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/contact\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/contact.ts","pathname":"/api/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://tu-dominio.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/alberto/ember-drago/cliente-1/src/pages/about.astro",{"propagation":"none","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/home/alberto/ember-drago/cliente-1/src/pages/rss.xml.js",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@js",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/home/alberto/ember-drago/cliente-1/src/pages/contacto.astro",{"propagation":"none","containsHead":true}],["/home/alberto/ember-drago/cliente-1/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/home/alberto/ember-drago/cliente-1/src/pages/nosotros.astro",{"propagation":"none","containsHead":true}],["/home/alberto/ember-drago/cliente-1/src/pages/servicios.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/api/contact@_@ts":"pages/api/contact.astro.mjs","\u0000@astro-page:src/pages/contacto@_@astro":"pages/contacto.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/nosotros@_@astro":"pages/nosotros.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"pages/rss.xml.astro.mjs","\u0000@astro-page:src/pages/servicios@_@astro":"pages/servicios.astro.mjs","/home/alberto/ember-drago/cliente-1/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_B1RSLT9R.mjs","/home/alberto/ember-drago/cliente-1/.astro/content-modules.mjs":"chunks/content-modules_CjUrt0m4.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_DoQZ2QQB.mjs","/home/alberto/ember-drago/cliente-1/src/content/blog/using-mdx.mdx?astroPropagatedAssets":"chunks/using-mdx_D96TPUnE.mjs","/home/alberto/ember-drago/cliente-1/.astro/content-assets.mjs":"chunks/content-assets_ZO0JaxDa.mjs","/home/alberto/ember-drago/cliente-1/src/content/blog/using-mdx.mdx":"chunks/using-mdx_De1JjCer.mjs","\u0000@astrojs-manifest":"manifest_DFxyMz0M.mjs","/home/alberto/ember-drago/cliente-1/src/pages/contacto.astro?astro&type=script&index=0&lang.ts":"_astro/contacto.astro_astro_type_script_index_0_lang.CYhL133d.js","/home/alberto/ember-drago/cliente-1/src/pages/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.D2hFRnz-.js","/home/alberto/ember-drago/cliente-1/src/pages/index.astro?astro&type=script&index=1&lang.ts":"_astro/index.astro_astro_type_script_index_1_lang.BmizRCC_.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/home/alberto/ember-drago/cliente-1/src/pages/contacto.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{const r=document.getElementById(\"map\");if(r&&typeof L<\"u\"){const e=[18.1869,-66.3129],o=\"154b7c6250724292ab60fdac2ff0669c\",t=L.map(r).setView(e,13);L.tileLayer(`https://tile.thunderforest.com/landscape/{z}/{x}/{y}.png?apikey=${o}`,{attribution:\"&copy; OpenStreetMap contributors & Thunderforest\",maxZoom:22}).addTo(t),L.marker(e).addTo(t).bindPopup(\"Barranquitas, Puerto Rico\").openPopup()}const n=document.getElementById(\"contactForm\"),s=document.getElementById(\"formMessage\");n&&n.addEventListener(\"submit\",async e=>{e.preventDefault();const o=new FormData(n);s.textContent=\"Enviando...\",s.className=\"form-message loading\";try{const a=await(await fetch(\"/api/contact\",{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify(Object.fromEntries(o))})).json();if(a.success)s.textContent=a.message,s.className=\"form-message success\",n.reset();else throw new Error(a.message||\"Error desconocido\")}catch(t){console.error(t),s.textContent=t.message||\"Hubo un error al enviar. Intenta nuevamente.\",s.className=\"form-message error\"}setTimeout(()=>{s.textContent=\"\",s.className=\"form-message\"},8e3)});const c=document.querySelectorAll(\".faq-item\");c.forEach(e=>{const o=e.querySelector(\".faq-question\"),t=e.querySelector(\".faq-answer\");o.addEventListener(\"click\",()=>{const a=e.classList.contains(\"active\");c.forEach(i=>{i.classList.remove(\"active\"),i.querySelector(\".faq-answer\").style.maxHeight=\"0\"}),a||(e.classList.add(\"active\"),t.style.maxHeight=t.scrollHeight+\"px\")})})});"],["/home/alberto/ember-drago/cliente-1/src/pages/index.astro?astro&type=script&index=1&lang.ts","window.addEventListener(\"load\",()=>{const o=document.getElementById(\"map\");if(!o||typeof L>\"u\")return;const r=[18.1869,-66.3129],i=\"154b7c6250724292ab60fdac2ff0669c\",s=o.parentElement,t=document.createElement(\"div\");t.className=\"map-spinner\",s.appendChild(t),L.Icon.Default.mergeOptions({iconRetinaUrl:\"https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png\",iconUrl:\"https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png\",shadowUrl:\"https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png\"});const e=L.map(o,{zoomControl:!1,attributionControl:!1}).setView(r,13);L.control.zoom({position:\"bottomright\"}).addTo(e),L.control.attribution({position:\"bottomleft\",prefix:!1}).addTo(e);const n=L.tileLayer(`https://tile.thunderforest.com/landscape/{z}/{x}/{y}.png?apikey=${i}`,{attribution:'<span style=\"font-size: 11px; opacity: 0.7;\">&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors & <a href=\"https://www.thunderforest.com/\">Thunderforest</a></span>',maxZoom:18,minZoom:10,opacity:.9}).addTo(e);n.on(\"load\",()=>t.remove()),n.on(\"tileerror\",()=>{e.removeLayer(n),L.tileLayer(\"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\",{attribution:'<span style=\"font-size: 11px; opacity: 0.7;\">&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors</span>',maxZoom:18,minZoom:10,opacity:.9}).addTo(e).on(\"load\",()=>t.remove())});const p=L.divIcon({className:\"custom-marker\",html:`\n            <div style=\"\n              width: 40px;\n              height: 40px;\n              background: linear-gradient(135deg, #10b981, #059669);\n              border-radius: 50% 50% 50% 0;\n              transform: rotate(-45deg);\n              border: 3px solid white;\n              box-shadow: 0 4px 12px rgba(16, 185, 129, 0.4);\n              display: flex;\n              align-items: center;\n              justify-content: center;\n            \">\n              <i class=\"fas fa-map-marker-alt\" style=\"\n                color: white;\n                font-size: 16px;\n                transform: rotate(45deg);\n                margin-top: -2px;\n              \"></i>\n            </div>\n          `,iconSize:[40,40],iconAnchor:[20,35]}),c=L.marker(r,{icon:p}).addTo(e).bindPopup(`\n            <div style=\"\n              padding: 12px;\n              font-family: 'Inter', sans-serif;\n              text-align: center;\n              background: linear-gradient(135deg, #f8fafc, #e2e8f0);\n              border-radius: 8px;\n              border: none;\n              box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n            \">\n              <h3 style=\"\n                margin: 0 0 8px 0;\n                color: #1e293b;\n                font-size: 16px;\n                font-weight: 600;\n              \">📍 Nuestra Ubicación</h3>\n              <p style=\"\n                margin: 0;\n                color: #64748b;\n                font-size: 8px;\n              \">Barranquitas, Puerto Rico</p>\n            </div>\n          `,{closeButton:!1,className:\"custom-popup\"}).openPopup();setTimeout(()=>{const a=c.getElement();a&&(a.style.animation=\"markerBounce 2s ease-in-out infinite\")},1e3)});"]],"assets":["/_astro/hero-dos.Bd_hUEtH.jpg","/_astro/hero-uno.CLt44QJQ.jpg","/_astro/hero-tres.BA8c4tSN.jpg","/_astro/nosotros.WS4mBMWw.jpg","/_astro/5-REHABILITACIÓN DE TECHOS.C3haJVP8.jpeg","/_astro/9-REHABILITACIÓN DE TECHOS.D8E9FCnn.jpg","/_astro/2-handyman.DBmLa29n.jpeg","/_astro/1-handyman.BbWtwSa8.jpeg","/_astro/3-handyman.BQA2M1ro.jpeg","/_astro/7-handyman.D5sjODjy.jpeg","/_astro/4-handyman.DAXDQTne.jpg","/_astro/4-impermeabilizacion.DDxSDVQM.jpg","/_astro/5-impermeabilizacion.Dnb-S0yZ.jpg","/_astro/5-handyman.uUzqpjkO.jpeg","/_astro/6-impermeabilizacion.C3SjjgRT.jpg","/_astro/10-impermeabilizacion.Ai4UNIR7.jpeg","/_astro/11-impermeabilizacion.Cva2WkVD.jpeg","/_astro/areas-verdes-portada.iP-glihl.jpeg","/_astro/areas-verdes-02.C6222N0a.jpeg","/_astro/areas-verdes-12.BM_gRV88.jpeg","/_astro/areas-verdes-17.2OefFUOu.jpeg","/_astro/4-REHABILITACIÓN DE TECHOS.D_CygNsD.jpg","/_astro/6-handyman.wHBH6GND.jpeg","/_astro/2-REHABILITACIÓN DE TECHOS.CF-giKKt.jpeg","/_astro/portada de techo.Dmi6EVTJ.jpg","/_astro/8-handyman.BNgzfZk8.jpeg","/_astro/3-REHABILITACIÓN DE TECHOS.CACVh95x.jpeg","/_astro/servicio-techo.Djz5poaY.jpg","/_astro/1-impermeabilizacion.Cm8nH_ZQ.jpeg","/_astro/8-impermeabilizacion.BIgP9IlV.jpg","/_astro/9-handyman.DAy2HdFK.jpeg","/_astro/areas-verdes-01.IUWvjFua.jpeg","/_astro/areas-verdes-06._nD3yLaG.jpeg","/_astro/7-impermeabilizacion.BGs5jbB8.jpeg","/_astro/impermeabilizacionhero.Du8PnGU4.jpeg","/_astro/areas-verdes-14.CfZGvCE1.jpeg","/_astro/areas-verdes-10.CY1QupSm.jpeg","/_astro/3-impermeabilizacion.Daux9Lxq.jpg","/_astro/areas-verdes-13.Bknho_mr.jpeg","/_astro/servicio-matas.d2V7T6ve.jpeg","/_astro/areas-verdes-09.CaKYzHSD.jpeg","/_astro/areas-verdes-15.Cclg1o4m.jpeg","/_astro/areas-verdes-11.fVuYGsRB.jpeg","/_astro/portada-handyman.Dt_Psd6S.jpeg","/_astro/11-handyman.CcNtoXq4.jpeg","/_astro/areas-verdes-07.CmUsAab1.jpeg","/_astro/areas-verdes-03.BY0XagZg.jpeg","/_astro/areas-verdes-04.CSTrZGr1.jpeg","/_astro/areas-verdes-08.DlcEciCA.jpeg","/_astro/areas-verdes-05.CBBO9Vhg.jpeg","/_astro/logo-navbar.GnEZt_7C.png","/_astro/hero.DECBFIDn.png","/_astro/about.5CA6Iohi.css","/_astro/index.DCDGfea5.css","/_astro/nosotros.BXZ2_VKg.css","/_astro/index.astro_astro_type_script_index_0_lang.D2hFRnz-.js","/fonts/atkinson-bold.woff","/fonts/atkinson-regular.woff","/js/main.js","/about/index.html","/contacto/index.html","/nosotros/index.html","/rss.xml","/servicios/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"PVOCUQj1AQ/EFuk0MZum74IzL02w7Jv38h680yFw7HE="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
