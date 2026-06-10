import React from 'react';
import { Container } from 'reactstrap';
import Title from '@/components/common/Title';

// Shown on /gracias when the buyer returns from Wompi WITHOUT an approved
// payment. PENDING (e.g. PSE awaiting bank confirmation) gets a reassuring
// "we're confirming" message; everything else (DECLINED/VOIDED/ERROR/UNKNOWN)
// gets a clear "it didn't go through, try again" with a path back to the cart.
const PaymentIssueBanner = ({ status, reference }) => {
  const isPending = status === 'PENDING';

  // Re-open the purchase modal on the homepage pre-filled at the last step,
  // reusing the same ?cart= recovery entry point the abandoned-cart emails use.
  const retryHref = reference ? `/?cart=${encodeURIComponent(reference)}` : '/';

  return (
    <section className="gracias-hero py-5">
      <Container>
        <div className="text-center mb-4" style={{ maxWidth: 620, margin: '0 auto' }}>
          <div className="mb-4">
            <i
              className={`fa ${isPending ? 'fa-clock-o' : 'fa-exclamation-circle'} fa-5x ${isPending ? 'text-gold' : 'text-muted'}`}
            ></i>
          </div>

          {isPending ? (
            <>
              <Title heading="Estamos confirmando tu pago" />
              <p className="lead text-muted mt-3">
                Tu pago quedó en proceso (esto pasa con algunos pagos PSE).
                Apenas tu banco lo confirme te llega el correo de tu pedido.
                No necesitas hacer nada más.
              </p>
              <p className="text-muted mt-3">
                ¿Dudas? Escríbele a Carolina por WhatsApp y te ayuda a
                confirmarlo.
              </p>
            </>
          ) : (
            <>
              <Title heading="Tu pago no se completó" />
              <p className="lead text-muted mt-3">
                No te preocupes — no se hizo ningún cobro. A veces el banco
                pide aprobación en la app, o se cae el PSE un momento. Puedes
                intentarlo de nuevo.
              </p>
              <div className="mt-4">
                <a href={retryHref} className="btn btn-default btn-gradient">
                  Intentar el pago de nuevo
                </a>
              </div>
              <p className="text-muted mt-4">
                Si prefieres, Carolina te ayuda a coordinar el pago por
                WhatsApp (PSE, tarjeta, Nequi, Daviplata o contra entrega en
                Medellín).
              </p>
            </>
          )}
        </div>
      </Container>
    </section>
  );
};

export default PaymentIssueBanner;
