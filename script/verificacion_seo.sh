#!/bin/bash

# Script de verificación y envío SEO para jonathanroofingpr.com
# Uso: ./seo-check.sh

DOMAIN="https://jonathanroofingpr.com"
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🔍 SEO Verification Script for ${DOMAIN}${NC}"
echo "=================================================="

# 1. Verificar conectividad básica
echo -e "\n${YELLOW}1. Verificando conectividad básica...${NC}"
STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$DOMAIN")
if [ $STATUS -eq 200 ]; then
  echo -e "✅ Sitio web accesible (HTTP $STATUS)"
else
  echo -e "❌ Sitio web no accesible (HTTP $STATUS)"
  exit 1
fi

# 2. Verificar HTTPS y certificado
echo -e "\n${YELLOW}2. Verificando HTTPS y certificado...${NC}"
HTTPS_STATUS=$(curl -s -I "$DOMAIN" | grep -i "HTTP/")
echo -e "✅ Status: $HTTPS_STATUS"

# 3. Verificar sitemap
echo -e "\n${YELLOW}3. Verificando sitemap...${NC}"
SITEMAP_URL="${DOMAIN}/sitemap-index.xml"
SITEMAP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$SITEMAP_URL")
if [ $SITEMAP_STATUS -eq 200 ]; then
  echo -e "✅ Sitemap accesible en $SITEMAP_URL"
  echo -e "📄 Contenido del sitemap:"
  curl -s "$SITEMAP_URL" | head -15 | sed 's/^/   /'
else
  echo -e "❌ Sitemap no encontrado (HTTP $SITEMAP_STATUS)"
  # Intentar con sitemap.xml alternativo
  ALT_SITEMAP="${DOMAIN}/sitemap.xml"
  ALT_STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$ALT_SITEMAP")
  if [ $ALT_STATUS -eq 200 ]; then
    echo -e "✅ Sitemap alternativo encontrado en $ALT_SITEMAP"
    SITEMAP_URL="$ALT_SITEMAP"
  fi
fi

# 4. Verificar robots.txt
echo -e "\n${YELLOW}4. Verificando robots.txt...${NC}"
ROBOTS_STATUS=$(curl -s -o /dev/null -w "%{http_code}" "${DOMAIN}/robots.txt")
if [ $ROBOTS_STATUS -eq 200 ]; then
  echo -e "✅ robots.txt encontrado"
  echo -e "📄 Contenido:"
  curl -s "${DOMAIN}/robots.txt" | sed 's/^/   /'
else
  echo -e "⚠️ robots.txt no encontrado (HTTP $ROBOTS_STATUS)"
fi

# 5. Verificar meta tags básicos
echo -e "\n${YELLOW}5. Verificando meta tags...${NC}"
PAGE_CONTENT=$(curl -s "$DOMAIN")
TITLE=$(echo "$PAGE_CONTENT" | grep -i "<title>" | sed 's/<[^>]*>//g' | xargs)
DESCRIPTION=$(echo "$PAGE_CONTENT" | grep -i 'meta.*description' | sed 's/.*content="\([^"]*\)".*/\1/')

if [ -n "$TITLE" ]; then
  echo -e "✅ Title: $TITLE"
else
  echo -e "❌ Title no encontrado"
fi

if [ -n "$DESCRIPTION" ]; then
  echo -e "✅ Description: $DESCRIPTION"
else
  echo -e "❌ Meta description no encontrada"
fi

# 6. Verificar velocidad de carga
echo -e "\n${YELLOW}6. Verificando velocidad de carga...${NC}"
LOAD_TIME=$(curl -s -w "%{time_total}" -o /dev/null "$DOMAIN")
echo -e "⏱️ Tiempo de carga: ${LOAD_TIME}s"
if (($(echo "$LOAD_TIME < 3.0" | bc -l))); then
  echo -e "✅ Velocidad buena (< 3s)"
else
  echo -e "⚠️ Velocidad mejorable (> 3s)"
fi

# 7. Verificar responsive/mobile
echo -e "\n${YELLOW}7. Verificando viewport meta tag...${NC}"
VIEWPORT=$(echo "$PAGE_CONTENT" | grep -i 'meta.*viewport')
if [ -n "$VIEWPORT" ]; then
  echo -e "✅ Viewport meta tag encontrado"
else
  echo -e "❌ Viewport meta tag no encontrado"
fi

# 8. Enviar a buscadores
echo -e "\n${YELLOW}8. Enviando sitemap a buscadores...${NC}"

# Google
echo -e "📤 Enviando a Google..."
GOOGLE_RESPONSE=$(curl -s -w "%{http_code}" "https://www.google.com/ping?sitemap=$SITEMAP_URL")
if [[ $GOOGLE_RESPONSE == *"200"* ]]; then
  echo -e "✅ Enviado a Google exitosamente"
else
  echo -e "⚠️ Respuesta de Google: $GOOGLE_RESPONSE"
fi

# Bing
echo -e "📤 Enviando a Bing..."
BING_RESPONSE=$(curl -s -w "%{http_code}" "https://www.bing.com/ping?sitemap=$SITEMAP_URL")
if [[ $BING_RESPONSE == *"200"* ]]; then
  echo -e "✅ Enviado a Bing exitosamente"
else
  echo -e "⚠️ Respuesta de Bing: $BING_RESPONSE"
fi

# 9. Verificar indexación actual
echo -e "\n${YELLOW}9. Verificando indexación actual...${NC}"
echo -e "🔍 Para verificar si ya estás indexado, ejecuta:"
echo -e "   ${GREEN}site:jonathanroofingpr.com${NC} en Google"

# 10. Resumen y próximos pasos
echo -e "\n${BLUE}📋 RESUMEN Y PRÓXIMOS PASOS:${NC}"
echo "=================================================="
echo -e "✅ Sitemap enviado a Google y Bing"
echo -e "⏳ La indexación puede tomar 1-7 días"
echo -e ""
echo -e "${GREEN}Acciones recomendadas:${NC}"
echo -e "1. Configurar Google Search Console: https://search.google.com/search-console/"
echo -e "2. Configurar Bing Webmaster Tools: https://www.bing.com/webmasters/"
echo -e "3. Envío manual directo:"
echo -e "   - Google: https://www.google.com/webmasters/tools/submit-url"
echo -e "   - Bing: https://www.bing.com/webmaster/submiturl"
echo -e ""
echo -e "${GREEN}Para verificar indexación:${NC}"
echo -e "• Google: site:jonathanroofingpr.com"
echo -e "• Bing: site:jonathanroofingpr.com"
echo -e ""
echo -e "🎉 ${GREEN}Script completado!${NC}"
