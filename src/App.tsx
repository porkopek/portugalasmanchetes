import React, { useState } from 'react';
import Nav from 'components/nav/nav';
import Routes from 'components/routes/routes';
import CookiesConsent from 'components/Privacy/cookies-consent';

function App() {
  const directionSetting = localStorage.getItem('direction') as 'row' | 'column';

  const [direction, setDirection] = useState<'row' | 'column'>(directionSetting || 'row');

  return (
    <div className="App">
      <Nav
        onDirectionChanges={() => {
          const newDirection = direction === 'column' ? 'row' : 'column';
          localStorage.setItem('direction', newDirection);
          setDirection(newDirection);
        }}
      />
      <Routes direction={direction} />
      {localStorage.getItem('cookiesConsent') === null && <CookiesConsent />}
    </div>
  );
}

export default App;
