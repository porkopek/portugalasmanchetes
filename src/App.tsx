import React, { useState } from 'react';
import Nav from 'components/nav/nav';
import Routes from 'components/routes/routes';
function App() {
  const directionSetting = localStorage.getItem('direction') as
    | 'row'
    | 'column';
  const [direction, setDirection] = useState<'row' | 'column'>(
    directionSetting || 'row'
  );
  const [, setSearchTerm] = useState<string>('');

  const onSearchTermChanges = (term: string) => {
    console.log(term);
    setSearchTerm(term);
  };
  return (
    <div className="App">
      <Nav
        onHandleSearch={onSearchTermChanges}
        onDirectionChanges={() => {
          const newDirection = direction === 'column' ? 'row' : 'column';
          localStorage.setItem('direction', newDirection);
          setDirection(newDirection);
        }}
      />
      <Routes direction={direction} />
    </div>
  );
}

export default App;
