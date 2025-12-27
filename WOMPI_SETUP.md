# Configuración de Wompi para Página de Agradecimiento

## Resumen
Esta guía explica cómo configurar Wompi para redirigir a los clientes a la página de agradecimiento después de completar una compra.

---

## 1. URL de Redirección

**URL de la página de agradecimiento:**
```
https://www.maquillajeembarazadas.com/gracias?id={reference}&amount={amount_in_cents}
```

---

## 2. Configuración en Wompi Dashboard

### Paso 1: Iniciar Sesión
1. Ir a [Wompi Dashboard](https://comercios.wompi.co/)
2. Iniciar sesión con tus credenciales

### Paso 2: Configurar Link de Pago
1. Navegar a **"Enlaces de Pago"** o **"Payment Links"**
2. Buscar el enlace existente: `https://checkout.wompi.co/l/tIZLKf`
3. Click en **"Editar"** o **"Edit"**

### Paso 3: Configurar Redirect URL
1. Buscar la sección **"URL de Redirección"** o **"Redirect URL"**
2. Agregar la siguiente URL:
   ```
   https://www.maquillajeembarazadas.com/gracias?id={reference}&amount={amount_in_cents}
   ```
3. **Importante**: Asegúrate de incluir los parámetros `{reference}` y `{amount_in_cents}` exactamente como se muestran

### Paso 4: Guardar Cambios
1. Click en **"Guardar"** o **"Save"**
2. Verificar que la configuración se haya guardado correctamente

---

## 3. Parámetros Disponibles en Wompi

Wompi puede enviar los siguientes parámetros en la URL de redirección:

| Parámetro | Descripción | Ejemplo |
|-----------|-------------|---------|
| `{reference}` | ID de referencia de tu transacción | `CROKO-20251226-001` |
| `{transaction_id}` | ID de transacción de Wompi | `12345-67890-ABCD` |
| `{amount_in_cents}` | Monto en centavos | `15000000` (= $150.000 COP) |
| `{status}` | Estado de la transacción | `APPROVED`, `DECLINED`, `ERROR` |
| `{payment_method_type}` | Tipo de método de pago | `CARD`, `NEQUI`, `PSE` |
| `{customer_email}` | Email del cliente | `cliente@ejemplo.com` |

**Parámetros requeridos para nuestra implementación:**
- ✅ `{reference}` o `{id}` - Para identificar el pedido
- ✅ `{amount_in_cents}` - Para mostrar el monto pagado

---

## 4. Testing

### URL de Prueba (sin Wompi)
Para probar la página sin hacer una compra real:
```
https://www.maquillajeembarazadas.com/gracias?id=TEST-12345&amount=15000000
```

### URL de Prueba (formato alternativo en pesos)
```
https://www.maquillajeembarazadas.com/gracias?id=TEST-12345&amount=150000
```

### Prueba con Tarjeta de Prueba de Wompi
1. **Tarjeta de Prueba**: `4242 4242 4242 4242`
2. **CVV**: Cualquier 3 dígitos
3. **Fecha**: Cualquier fecha futura
4. **Nombre**: Cualquier nombre

### Verificar que funciona:
1. ✅ La página /gracias se carga correctamente
2. ✅ Se muestra el número de pedido correcto
3. ✅ Se muestra el monto correcto en formato COP
4. ✅ El evento de compra se registra en GTM (Google Analytics)
5. ✅ El temporizador de WhatsApp funciona
6. ✅ La redirección a WhatsApp incluye el número de pedido

---

## 5. Verificar Eventos de Tracking

### Google Tag Manager / GA4
1. Abrir [Google Tag Manager](https://tagmanager.google.com/)
2. Navegar a **Preview Mode**
3. Cargar la página de gracias con parámetros
4. Verificar que el evento `purchase` se dispare en el dataLayer

**Datos esperados en dataLayer:**
```javascript
{
  event: 'purchase',
  ecommerce: {
    transaction_id: 'CROKO-20251226-001',
    value: 150000,
    currency: 'COP',
    items: [{
      item_id: 'kit_prenatal',
      item_name: 'Kit Maquillaje Prenatal',
      price: 150000,
      quantity: 1
    }]
  }
}
```

### Meta Pixel (Opcional)
1. Instalar [Meta Pixel Helper](https://chrome.google.com/webstore/detail/meta-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc)
2. Abrir la página de gracias
3. Click en el icono de Meta Pixel Helper
4. Verificar que se dispare el evento `Purchase`

**Para activar Meta Pixel:**
1. Editar `/src/app/gracias/page.js`
2. Buscar la línea: `// setMetaPixelId('YOUR_PIXEL_ID');`
3. Descomentar y agregar tu Pixel ID:
   ```javascript
   setMetaPixelId('1234567890123456'); // Reemplazar con tu Pixel ID real
   ```

---

## 6. Flujo Completo del Usuario

```
1. Usuario hace click en "Comprar" → Wompi Checkout
                                              ↓
2. Usuario completa pago en Wompi → Pago Aprobado
                                              ↓
3. Wompi redirige a: /gracias?id=XXX&amount=YYY
                                              ↓
4. Página de gracias se carga → Se disparan eventos de tracking
                                              ↓
5. Se muestra confirmación del pedido → Countdown para WhatsApp
                                              ↓
6. Usuario es redirigido a WhatsApp (10 segundos) o cancela
```

---

## 7. Troubleshooting

### Problema: No se redirige a la página de gracias
**Solución:**
- Verificar que la URL de redirección esté configurada correctamente en Wompi
- Asegurarse de que la URL incluya los parámetros `{reference}` y `{amount_in_cents}`

### Problema: Los parámetros no aparecen en la URL
**Solución:**
- Verificar que usaste llaves `{}` alrededor de los nombres de parámetros en Wompi
- Ejemplo correcto: `{reference}`, no `reference`

### Problema: El monto se muestra incorrectamente
**Solución:**
- La página maneja automáticamente conversión de centavos a pesos
- Si `amount > 1.000.000`, se asume que está en centavos y se divide por 100
- Si `amount < 1.000.000`, se asume que está en pesos directamente

### Problema: No se disparan los eventos de tracking
**Solución:**
- Abrir la consola del navegador (F12)
- Buscar mensajes de confirmación:
  - `✓ GA4 Purchase event fired via GTM`
  - `✓ Meta Pixel Purchase event fired`
- Verificar que GTM esté cargado correctamente

### Problema: La redirección a WhatsApp no incluye el número de pedido
**Solución:**
- Verificar que el parámetro `id` o `reference` esté presente en la URL
- Verificar en la consola si hay errores de JavaScript

---

## 8. Información de Contacto

**Número de WhatsApp:** 573168161717

**Mensaje por defecto:**
```
¡Hola! Acabo de comprar el Kit Maquillaje Prenatal 🎨

Mi número de pedido es: [ORDER_ID]
```

---

## 9. Archivos Relevantes

| Archivo | Propósito |
|---------|-----------|
| `/src/app/gracias/page.js` | Página principal de agradecimiento |
| `/src/app/gracias/layout.js` | Metadata y layout de la página |
| `/src/components/common/Title.js` | Componente de título |
| `/src/components/common/WhatsAppCountdown.js` | Countdown para redirección |
| `/src/components/cards/OrderCard.js` | Tarjeta de resumen de pedido |
| `/wompi-tracking-technical-guide.md` | Guía técnica detallada |

---

## 10. Configuración de Variables

### WhatsApp
```javascript
// En /src/app/gracias/page.js, línea ~76
const phone = '573168161717';
```

### Meta Pixel ID
```javascript
// En /src/app/gracias/page.js, función useEffect
setMetaPixelId('YOUR_PIXEL_ID'); // Agregar tu Pixel ID aquí
```

### Tiempo de Countdown (segundos)
```javascript
// En /src/app/gracias/page.js, componente WhatsAppCountdown
<WhatsAppCountdown
  onComplete={handleWhatsAppRedirect}
  seconds={10} // Cambiar este valor para ajustar el tiempo
/>
```

---

## ✅ Checklist de Configuración

- [ ] Configurar URL de redirección en Wompi Dashboard
- [ ] Probar con URL de prueba manual
- [ ] Hacer compra de prueba con tarjeta de prueba de Wompi
- [ ] Verificar que se disparen eventos de GA4/GTM
- [ ] Configurar Meta Pixel ID (opcional)
- [ ] Verificar redirección a WhatsApp
- [ ] Verificar que el número de pedido se incluya en WhatsApp
- [ ] Probar en dispositivos móviles
- [ ] Verificar que funcione el botón "Cancelar redirección"
- [ ] Confirmar que no se dupliquen eventos al refrescar la página

---

**Última actualización:** 26 de diciembre, 2024
