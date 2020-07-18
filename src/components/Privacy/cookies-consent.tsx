import React, { useState } from 'react';
import { Paper, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function CookiesConsent() {
  const [display, setDisplay] = useState('flex');
  const handleAcceptCookies = () => {
    localStorage.setItem('cookiesConsent', 'true');
    setDisplay('none');
  };
  return (
    <Paper
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
        backgroundColor: 'rgba(52, 51, 51, 0.66)',
        color: 'white',

        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        display: display,
      }}
    >
      <div
        style={{
          padding: 18,
          display: 'flex',
          backgroundColor: '#1c1d1c',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 20,
          margin: 18,
        }}
      >
        <p>Este sítio web utiliza cookies e armazena alguns dados para a sua comodidade.</p>
        <p>
          Se deseja continuar a navegar, deve dar o seu consentimento. Em caso contrário, deverá
          abandonar o sítio.
        </p>
        <p>Pode consultar a nossa Política de Privacidade no seguinte link </p>
        <div style={{ marginBottom: 25 }}>
          <Link to="/RGPD" style={{ color: '#FF5722' }} onClick={handleAcceptCookies}>
            Política de Privacidade
          </Link>
        </div>
        <div>
          <Button
            style={{ marginRight: 18, color: 'white', borderColor: 'white' }}
            variant="outlined"
          >
            Recusar
          </Button>
          <Button variant="contained" color="primary" onClick={handleAcceptCookies}>
            Aceitar
          </Button>
        </div>
      </div>
    </Paper>
  );
}
