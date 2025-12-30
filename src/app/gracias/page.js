'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import useOrderTracking from '@/hooks/useOrderTracking';
import useWhatsAppRedirect from '@/hooks/useWhatsAppRedirect';
import SuccessBanner from '@/components/gracias/SuccessBanner';
import WhatsAppSection from '@/components/gracias/WhatsAppSection';
import OrderDetailsSection from '@/components/gracias/OrderDetailsSection';
import LoadingState from '@/components/gracias/LoadingState';
import '@/assets/scss/gracias.scss';

// Content component that uses useSearchParams
function GraciasContent() {
  const searchParams = useSearchParams();
  const { orderData } = useOrderTracking(searchParams);
  const handleWhatsAppRedirect = useWhatsAppRedirect(orderData?.orderId);

  // Show loading state while initializing
  if (!orderData) {
    return <LoadingState message="Cargando..." />;
  }

  return (
    <>
      <SuccessBanner />

      <WhatsAppSection
        onComplete={() => handleWhatsAppRedirect(true)}
        onManualClick={() => handleWhatsAppRedirect(false)}
      />

      <OrderDetailsSection
        orderData={orderData}
        onWhatsAppClick={handleWhatsAppRedirect}
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
