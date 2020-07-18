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
        alignItems: 'flex-end',
        display: display,
      }}
    >
      <div
        className="system-font"
        style={{
          padding: ' 50px',
          display: 'flex',
          backgroundColor: 'white',
          flexDirection: 'column',
          justifyContent: 'center',
          color: 'rgba(0,0,0,.8)',
          width: 'auto',
          maxWidth: 650,
          borderRadius: '4px',
          fontSize: 18,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={process.env.PUBLIC_URL + '/favicon.png'}
            alt=""
            style={{ marginRight: 20, marginLeft: -20 }}
          />
          <h1> Portugal ás Manchetes</h1>
        </div>

        <p>Este sítio utiliza cookies.</p>
        <p>
          Se deseja continuar a navegar, deve dar o seu consentimento. Em caso contrário, deverá
          abandonar o sítio.
          <br />
          Pode consultar a nossa Política de Privacidade no seguinte link{' '}
        </p>
        <div style={{ marginBottom: 25 }}>
          <Link to="/RGPD" style={{ color: '#9C27B0' }} onClick={handleAcceptCookies}>
            Política de Privacidade
          </Link>
        </div>
        <div>
          <Button style={{ marginRight: 18 }} variant="outlined">
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
