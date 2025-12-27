'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Script from 'next/script';
import { Container, Row, Col } from 'reactstrap';
import Title from '@/components/common/Title';
import OrderCard from '@/components/cards/OrderCard';
import WhatsAppCountdown from '@/components/common/WhatsAppCountdown';
import '@/assets/scss/gracias.scss';

// Separate component for search params logic
function GraciasContent() {
  const searchParams = useSearchParams();
  const [orderData, setOrderData] = useState(null);
  const [trackingFired, setTrackingFired] = useState(false);

  useEffect(() => {
    // Extract URL parameters
    const orderId = searchParams.get('id') || searchParams.get('reference');
    const amountParam = searchParams.get('amount') || searchParams.get('amount_in_cents');

    // Validate parameters
    if (!orderId || !amountParam) {
      console.error('Missing required Wompi parameters (id and amount)');
      return;
    }

    // Parse and validate amount
    const parsedAmount = parseInt(amountParam);
    if (isNaN(parsedAmount)) {
      console.error('Invalid amount parameter');
      return;
    }

    // Convert amount (handle both cents and pesos)
    const amount = parsedAmount > 1000000 ? parsedAmount / 100 : parsedAmount;

    // Check if we've already tracked this purchase
    const purchaseKey = `purchase_tracked_${orderId}`;
    const alreadyTracked = sessionStorage.getItem(purchaseKey);

    if (!alreadyTracked) {
      // Fire GTM dataLayer event for purchase
      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'purchase',
          ecommerce: {
            transaction_id: orderId,
            value: amount,
            currency: 'COP',
            items: [{
              item_id: 'kit_prenatal',
              item_name: 'Kit Maquillaje Prenatal',
              price: amount,
              quantity: 1
            }]
          }
        });
        console.log('✓ GA4 Purchase event fired via GTM');
      } else {
        console.warn('⚠ GTM dataLayer not available');
      }

      // Mark as tracked
      sessionStorage.setItem(purchaseKey, 'true');
      setTrackingFired(true);
    }

    // Set order data for display
    setOrderData({
      orderId,
      amount,
      formattedAmount: new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
      }).format(amount),
      date: new Date().toLocaleDateString('es-CO', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    });
  }, [searchParams]);

  const handleWhatsAppRedirect = (fromAutoRedirect = false) => {
    const phone = '573168161717'; // WhatsApp number from StickyCTA
    let message = 'Hola! Acabo de comprar el Kit Maquillaje Prenatal';

    if (orderData?.orderId) {
      message += `\n\nMi numero de pedido es: ${orderData.orderId}`;
    }

    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

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
  };

  if (!orderData) {
    return (
      <section className="py-5">
        <Container>
          <Row>
            <Col xs="12" className="text-center">
              <div className="py-5">
                <i className="fa fa-spinner fa-spin fa-3x text-primary mb-3"></i>
                <h4>Cargando información de tu pedido...</h4>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }

  return (
    <>
      {/* Success Banner Section */}
      <section className="gracias-hero py-5">
        <Container>
          <div className="text-center mb-4">
            <div className="mb-4">
              <i className="fa fa-check-circle fa-5x text-gold"></i>
            </div>
            <Title heading="¡Gracias por tu compra!" />
            <p className="lead text-muted mt-3">
              Tu pedido ha sido confirmado exitosamente
            </p>
          </div>
        </Container>
      </section>

      {/* WhatsApp Contact Section - Placed first for immediate action */}
      <section className="pt-5 pb-3">
        <Container>
          <Row>
            <Col lg="8" className="mx-auto">
              <div className="text-center p-4 whatsapp-section rounded mb-0">
                <h4 className="mb-4 text-gold">Continuemos por WhatsApp</h4>
                <p className="text-muted mb-4">
                  En unos segundos serás redirigido a WhatsApp para que nos compartas tus datos de envío y podamos coordinar la entrega de tu pedido.
                </p>
                <WhatsAppCountdown
                  onComplete={() => handleWhatsAppRedirect(true)}
                  onManualClick={() => handleWhatsAppRedirect(false)}
                  seconds={15}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Order Details Section */}
      <section className="pt-3 pb-5">
        <Container>
          <Row>
            <Col lg="8" className="mx-auto">
              <OrderCard
                className="mb-4"
                image="https://ik.imagekit.io/ge17f66b4ma/Kit%20foto%20690x551_2rLNnbXrzh.png"
                orderId={orderData.orderId}
                orderDate={orderData.date}
                status="Confirmado ✓"
                title="Kit Maquillaje Prenatal"
                description="¡Felicitaciones por tu compra! El siguiente paso es coordinar los detalles de envío vía WhatsApp para que recibas tu kit lo antes posible."
              />

              {/* Order Stats */}
              <Row className="text-center mb-5 order-stats">
                <Col xs="12" className="mb-3">
                  <div className="stat-box">
                    <h3 className="text-gold mb-2">{orderData.formattedAmount}</h3>
                    <p className="text-muted mb-0">Total Pagado</p>
                  </div>
                </Col>
              </Row>

              {/* What's Next Section */}
              <div className="whats-next-section">
                <h5 className="mb-3">¿Qué sigue?</h5>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <i className="fa fa-check text-success me-2"></i>
                    Coordinaremos por WhatsApp los detalles de envío de tu pedido
                  </li>
                  <li className="mb-2">
                    <i className="fa fa-check text-success me-2"></i>
                    Tu kit llegará en 3-5 días hábiles
                  </li>
                  <li className="mb-2">
                    <i className="fa fa-check text-success me-2"></i>
                    Te mantendremos informado del estado de tu pedido
                  </li>
                </ul>
              </div>

              {/* CTA Buttons */}
              <div className="text-center mt-5 cta-buttons">
                <a
                  href="/"
                  className="btn btn-outline-primary me-2 mb-2"
                >
                  Volver al Inicio
                </a>
                <button
                  onClick={handleWhatsAppRedirect}
                  className="btn btn-success mb-2"
                >
                  <i className="fa fa-whatsapp me-2"></i>
                  Contactar por WhatsApp
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

// Main page component with Suspense boundary
export default function GraciasPage() {
  const [metaPixelId, setMetaPixelId] = useState(null);

  useEffect(() => {
    // Check if Meta Pixel should be loaded
    // You can set the pixel ID here or load from environment variable
    // setMetaPixelId('YOUR_PIXEL_ID');
  }, []);

  return (
    <>
      {/* Meta Pixel - Add your Pixel ID */}
      {metaPixelId && (
        <>
          <Script
            id="meta-pixel"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');

                fbq('init', '${metaPixelId}');
                fbq('track', 'PageView');
              `
            }}
          />
          <Script
            id="meta-pixel-purchase"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function() {
                  const params = new URLSearchParams(window.location.search);
                  const amount = params.get('amount') || params.get('amount_in_cents');
                  if (amount) {
                    let value = parseInt(amount);
                    if (value > 1000000) value = value / 100;

                    fbq('track', 'Purchase', {
                      value: value,
                      currency: 'COP',
                      content_type: 'product',
                      content_ids: ['kit_prenatal'],
                      content_name: 'Kit Maquillaje Prenatal'
                    });
                    console.log('✓ Meta Pixel Purchase event fired');
                  }
                })();
              `
            }}
          />
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src={`https://www.facebook.com/tr?id=${metaPixelId}&ev=Purchase&noscript=1`}
              alt=""
            />
          </noscript>
        </>
      )}

      {/* Main Content with Suspense for useSearchParams */}
      <Suspense fallback={
        <section className="py-5">
          <Container>
            <Row>
              <Col xs="12" className="text-center py-5">
                <i className="fa fa-spinner fa-spin fa-3x text-primary mb-3"></i>
                <h4>Cargando...</h4>
              </Col>
            </Row>
          </Container>
        </section>
      }>
        <GraciasContent />
      </Suspense>
    </>
  );
}
