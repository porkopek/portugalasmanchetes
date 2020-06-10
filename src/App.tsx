import React, { useState } from 'react';
import Nav from 'components/nav/nav';
import Routes from 'components/routes/routes';
function App() {
  const [direction, setDirection] = useState<'row' | 'column'>('row');
  const [, setSearchTerm] = useState<string>('');

  const onSearchTermChanges = (term: string) => {
    console.log(term);
    setSearchTerm(term);
  };
  return (
    <div className="App">
      <Nav
        onHandleSearch={onSearchTermChanges}
        onDirectionChanges={() =>
          setDirection(direction === 'column' ? 'row' : 'column')
        }
      />
      <Routes direction={direction} />
    </div>
  );
}

export default App;
