import React, { useState } from 'react';
import Nav from 'components/nav/nav';
import Routes from 'components/routes/routes';
import CookiesConsent from 'components/Privacy/cookies-consent';
import { Container } from '@material-ui/core';
import Hemeroteca from 'components/hemeroteca/hemeroteca';
import { getDaysSince2020First } from 'lib/utils';

function App() {
  const directionSetting = localStorage.getItem('direction') as 'row' | 'column';

  const [direction, setDirection] = useState<'row' | 'column'>(directionSetting || 'row');
  const [daysSince2020First, setDaysSince2020First] = useState(
    getDaysSince2020First(new Date()).toString()
  );
  const handleChangeDirection = () => {
    const newDirection = direction === 'column' ? 'row' : 'column';
    localStorage.setItem('direction', newDirection);
    setDirection(newDirection);
  };

  return (
    <div className="App">
      <Nav onDirectionChanges={handleChangeDirection} daysSince2020First={daysSince2020First} />
      <Container style={{ padding: '28px 0' }}>
        <Routes direction={direction} daysSince2020First={daysSince2020First} />
      </Container>
      {localStorage.getItem('cookiesConsent') === null && <CookiesConsent />}
    </div>
  );
}

export default App;
