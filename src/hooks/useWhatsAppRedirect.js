import { useCallback } from 'react';

const WHATSAPP_PHONE = '573168161717';

const useWhatsAppRedirect = (orderId) => {
  const handleWhatsAppRedirect = useCallback((fromAutoRedirect = false) => {
    let message = 'Hola! Acabo de comprar el Kit Maquillaje Prenatal';

    if (orderId) {
      message += `\n\nMi numero de pedido es: ${orderId}`;
    }

    const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;

    if (fromAutoRedirect) {
      // Auto-redirect: Due to browser popup blockers, we redirect in same window
      // This ensures the redirect actually works
      console.log('Auto-redirecting to WhatsApp (same window - required by browser security)');
      window.location.href = whatsappUrl;
    } else {
      // Manual click: Open in new window (browsers allow this on user clicks)
      const newWindow = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

      if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
        // Fallback if somehow blocked
        console.warn('Popup blocked on manual click, using same window');
        window.location.href = whatsappUrl;
      } else {
        console.log('WhatsApp opened in new window via manual click');
      }
    }
  }, [orderId]);

  return handleWhatsAppRedirect;
};

export default useWhatsAppRedirect;
