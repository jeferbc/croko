export const revalidate = 3600 // Regenerate every hour

export async function GET() {
  const domain = 'https://www.croko.co'

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">
  <channel>
    <title>Croko - Kit Pinta Barriguita</title>
    <link>${domain}</link>
    <description>Kit de pintura corporal para embarazadas</description>
    <item>
      <g:id>CROKO-KPB-001</g:id>
      <g:title>Kit Pinta Barriguita - Crea Recuerdos Únicos en Familia con Pintura Corporal para Embarazadas</g:title>
      <g:description>Crea un recuerdo inolvidable de tu embarazo junto a tu familia. El Kit Pinta Barriguita incluye todo lo necesario: 15 colores de pinturas hipoalergénicas, pinceles profesionales, plantillas y videotutoriales paso a paso. +500 familias felices. Momento ideal: semanas 28-36. Envío gratis.</g:description>
      <g:link>${domain}/</g:link>
      <g:image_link>https://ik.imagekit.io/ge17f66b4ma/Fotokitcarrusel%20(1)%20(1)_kduJxCzra.png</g:image_link>
      <g:availability>in_stock</g:availability>
      <g:quantity>50</g:quantity>
      <g:price>190000 COP</g:price>
      <g:condition>new</g:condition>
      <g:brand>Croko</g:brand>
      <g:mpn>CROKO-KPB-001</g:mpn>
      <g:identifier_exists>no</g:identifier_exists>
      <g:google_product_category>Arts &amp; Entertainment &gt; Hobbies &amp; Creative Arts &gt; Arts &amp; Crafts &gt; Art &amp; Craft Kits</g:google_product_category>
      <g:product_type>Kits de Arte &gt; Pintura Corporal &gt; Kit Pinta Barriguita</g:product_type>
      <g:shipping>
        <g:country>CO</g:country>
        <g:price>0 COP</g:price>
      </g:shipping>
      <g:product_highlight>+500 familias han creado recuerdos inolvidables</g:product_highlight>
      <g:product_highlight>Todo incluido: 15 colores, pinceles, plantillas y videotutoriales</g:product_highlight>
      <g:product_highlight>Pinturas hipoalergénicas a base de agua 100% seguras</g:product_highlight>
      <g:product_highlight>Perfecto para baby showers y sesiones en familia</g:product_highlight>
      <g:product_highlight>Envío gratis en Colombia</g:product_highlight>
    </item>
  </channel>
</rss>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}
