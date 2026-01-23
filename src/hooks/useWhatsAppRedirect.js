import { useCallback } from 'react';
import { getPurchaseSelections } from './usePurchaseModal';
import { getImageNames } from '@/data/designImages';

const WHATSAPP_PHONE = '573168161717';

const useWhatsAppRedirect = (orderId) => {
  const handleWhatsAppRedirect = useCallback((fromAutoRedirect = false) => {
    let message = 'Hola! Acabo de comprar el Kit Pinta Barriguita';

    if (orderId) {
      message += `\n\nMi numero de pedido es: ${orderId}`;
    }

    // Include purchase selections if available
    const selections = getPurchaseSelections();
    if (selections) {
      message += '\n\n*Mis selecciones:*';
      if (selections.gender) {
        message += `\n• Género: ${selections.gender === 'boy' ? 'Niño' : 'Niña'}`;
      }
      if (selections.selectedImages && selections.selectedImages.length > 0) {
        const imageNames = getImageNames(selections.selectedImages);
        message += `\n• Diseños: ${imageNames.join(', ')}`;
      }
      if (selections.babyName) {
        message += `\n• Nombre del bebé: ${selections.babyName}`;
      }
      if (selections.email) {
        message += `\n• Email: ${selections.email}`;
      }
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
