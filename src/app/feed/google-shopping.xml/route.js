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
      <g:title>Kit Pinta Barriguita - Kit de Pintura Corporal para Embarazadas con Pinceles y Pinturas Seguras</g:title>
      <g:description>Kit completo de pintura corporal para barriga de embarazada. Incluye pinturas hipoalergénicas a base de agua, pinceles profesionales y guía de diseños. Ideal para sesiones fotográficas de maternidad y baby showers. Perfecto para semanas 28-36.</g:description>
      <g:link>${domain}/kit-pinta-barriguitas</g:link>
      <g:image_link>https://ik.imagekit.io/ge17f66b4ma/Kit%20foto%20690x551_2rLNnbXrzh.png</g:image_link>
      <g:availability>in_stock</g:availability>
      <g:price>150000 COP</g:price>
      <g:condition>new</g:condition>
      <g:brand>Croko</g:brand>
      <g:identifier_exists>no</g:identifier_exists>
      <g:google_product_category>Arts &amp; Entertainment &gt; Hobbies &amp; Creative Arts &gt; Arts &amp; Crafts &gt; Art &amp; Craft Kits</g:google_product_category>
      <g:product_type>Kits de Arte &gt; Pintura Corporal &gt; Kit Pinta Barriguita</g:product_type>
      <g:shipping>
        <g:country>CO</g:country>
        <g:price>0 COP</g:price>
      </g:shipping>
      <g:product_highlight>Pinturas a base de agua 100% seguras</g:product_highlight>
      <g:product_highlight>Incluye pinceles profesionales y plantillas</g:product_highlight>
      <g:product_highlight>Videos tutoriales paso a paso incluidos</g:product_highlight>
      <g:product_highlight>Ideal para semanas 28-36 del embarazo</g:product_highlight>
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
