'use client'
import React, { Fragment, useState, useEffect } from 'react';

const cookieConsentStyles = {
  ribbon: {
    position: "fixed",
    bottom: "0",
    left: "0",
    right: "0",
    backgroundColor: "#2c2c2c",
    color: "#ffffff",
    padding: "15px 20px",
    zIndex: 1000,
    boxShadow: "0 -2px 10px rgba(0,0,0,0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "15px"
  },
  content: {
    flex: "1",
    minWidth: "250px"
  },
  text: {
    margin: "0",
    fontSize: "14px",
    lineHeight: "1.4"
  },
  link: {
    color: "#c0882f",
    textDecoration: "underline"
  },
  buttons: {
    display: "flex",
    gap: "10px",
    flexShrink: "0"
  },
  button: {
    padding: "8px 16px",
    border: "none",
    borderRadius: "4px",
    fontSize: "14px",
    cursor: "pointer",
    fontWeight: "500",
    transition: "background-color 0.3s ease"
  },
  acceptButton: {
    backgroundColor: "#c0882f",
    color: "#ffffff"
  },
  rejectButton: {
    backgroundColor: "transparent",
    color: "#ffffff",
    border: "1px solid #ffffff"
  }
};

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <Fragment>
      <div style={cookieConsentStyles.ribbon}>
        <div style={cookieConsentStyles.content}>
          <p style={cookieConsentStyles.text}>
            Utilizamos cookies para mejorar tu experiencia en nuestro sitio web y analizar el tráfico.
            Al continuar navegando, aceptas nuestro uso de cookies.
            <a
              href="/politica-cookies"
              style={cookieConsentStyles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}Leer política de cookies
            </a>
          </p>
        </div>
        <div style={cookieConsentStyles.buttons}>
          <button
            style={{...cookieConsentStyles.button, ...cookieConsentStyles.rejectButton}}
            onClick={handleReject}
            onMouseOver={(e) => e.target.style.backgroundColor = '#ffffff22'}
            onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            Rechazar
          </button>
          <button
            style={{...cookieConsentStyles.button, ...cookieConsentStyles.acceptButton}}
            onClick={handleAccept}
            onMouseOver={(e) => e.target.style.backgroundColor = '#a67429'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#c0882f'}
          >
            Aceptar
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default CookieConsent;
