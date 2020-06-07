import React, { useState } from 'react';
import ArticlesContainer from 'components/containers/articles-container';
import { Route, Switch } from 'react-router-dom';
import Nav from 'components/nav/nav';
function App() {
  const [direction, setDirection] = useState<'row' | 'column'>('row');
  const [searchTerm, setSearchTerm] = useState<string>('');

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
      <div
        style={{
          maxWidth: 1140,
          margin: '2em auto',
        }}
      >
        <Switch>
          <Route
            path="/:language"
            render={(props) => (
              <ArticlesContainer
                {...props}
                direction={direction}
                searchTerm={searchTerm}
              />
            )}
          />
          <Route
            path="/"
            render={(props) => (
              <ArticlesContainer
                {...props}
                direction={direction}
                searchTerm={searchTerm}
              />
            )}
          />
        </Switch>
      </div>
    </div>
  );
}

export default App;
