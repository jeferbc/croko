'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import useOrderTracking from '@/hooks/useOrderTracking';
import useWhatsAppRedirect from '@/hooks/useWhatsAppRedirect';
import SuccessBanner from '@/components/gracias/SuccessBanner';
import PaymentIssueBanner from '@/components/gracias/PaymentIssueBanner';
import OrderDetailsSection from '@/components/gracias/OrderDetailsSection';
import LoadingState from '@/components/gracias/LoadingState';
import GoogleCustomerReviewsOptIn from '@/components/gracias/GoogleCustomerReviewsOptIn';
import '@/assets/scss/gracias.scss';

// Content component that uses useSearchParams
function GraciasContent() {
  const searchParams = useSearchParams();
  const { orderData, paymentStatus } = useOrderTracking(searchParams);
  const handleWhatsAppRedirect = useWhatsAppRedirect(orderData?.orderId);

  // Show loading state while we resolve the transaction status with Wompi.
  if (!orderData || paymentStatus === null) {
    return <LoadingState message="Confirmando tu pago..." />;
  }

  // Only an approved payment gets the full confirmation experience. Any other
  // outcome (declined, pending, unknown) shows the issue banner with a retry
  // path instead of a false "thank you for your purchase".
  if (paymentStatus !== 'APPROVED') {
    return (
      <PaymentIssueBanner
        status={paymentStatus}
        reference={orderData.orderId}
      />
    );
  }

  return (
    <>
      <SuccessBanner />

      <OrderDetailsSection
        orderData={orderData}
        onWhatsAppClick={handleWhatsAppRedirect}
      />

      <GoogleCustomerReviewsOptIn
        orderId={orderData.orderId}
        email={orderData.customerEmail}
        estimatedDeliveryDate={orderData.estimatedDeliveryDate}
      />
    </>
  );
}

// Main page component with Suspense boundary
export default function GraciasPage() {
  return (
    <Suspense fallback={<LoadingState />}>
      <GraciasContent />
    </Suspense>
  );
}
