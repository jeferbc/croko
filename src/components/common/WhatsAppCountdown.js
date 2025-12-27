'use client';

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const WhatsAppCountdown = ({ onComplete, onManualClick, seconds = 10 }) => {
  const [cancelled, setCancelled] = useState(false);

  const Completionist = () => {
    useEffect(() => {
      if (!cancelled && onComplete) {
        onComplete();
      }
    }, []);

    return <span className="text-success">¡Listo para continuar!</span>;
  };

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed || cancelled) {
      return <Completionist />;
    } else {
      return (
        <div className="countdown whatsapp-countdown">
          <p className="text-center mb-3">Redirigiendo a WhatsApp en...</p>
          <ul className="d-flex justify-content-center gap-3 list-unstyled">
            <li>
              <div className="event-counter">
                <h2>
                  <span className="time digits">{String(minutes).padStart(2, '0')}</span>
                  <span className="title">min</span>
                </h2>
              </div>
            </li>
            <li className="countdown-separator">:</li>
            <li>
              <div className="event-counter">
                <h2>
                  <span className="time digits">{String(seconds).padStart(2, '0')}</span>
                  <span className="title">seg</span>
                </h2>
              </div>
            </li>
          </ul>
          <div className="text-center mt-4">
            <button
              className="btn btn-outline-secondary me-2"
              onClick={() => setCancelled(true)}
            >
              Cancelar
            </button>
            <button
              className="btn btn-success"
              onClick={() => onManualClick ? onManualClick() : onComplete?.()}
            >
              Ir Ahora a WhatsApp
            </button>
          </div>
        </div>
      );
    }
  };

  const countdownDate = new Date().getTime() + (seconds * 1000);

  const Countdown = dynamic(() => import("react-countdown"), {
    ssr: false,
  });

  if (cancelled) {
    return (
      <div className="text-center">
        <p className="text-muted">Redirección cancelada</p>
        <button
          className="btn btn-success mt-2"
          onClick={() => onManualClick ? onManualClick() : onComplete?.()}
        >
          Abrir WhatsApp Manualmente
        </button>
      </div>
    );
  }

  return <Countdown date={countdownDate} renderer={renderer} />;
};

export default WhatsAppCountdown;
