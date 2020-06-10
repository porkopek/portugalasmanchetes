import React from 'react';

import { Route, Switch, useLocation } from 'react-router';
import Search from 'components/explore/search';
import ArticlesContainer from 'components/containers/articles-container';
import Explore from 'components/explore/explore';
import { Container } from '@material-ui/core';

interface IRoutesProps {
  direction: 'row' | 'column';
}

export default function Routes({ direction }: IRoutesProps) {
  const location = useLocation();
  return (
    <Container style={{ padding: '28px 0' }}>
      <Switch>
        <Route path="/explore" render={(_) => <Explore />} />
        <Route
          path="/search/:searchTerm"
          render={(props) => (
            <ArticlesContainer {...props} direction={direction} />
          )}
        />
        <Route
          path="/language/:language"
          render={(props) => (
            <ArticlesContainer {...props} direction={direction} />
          )}
        />
        <Route
          path="/source/:domain"
          render={(props) => (
            <ArticlesContainer {...props} direction={direction} />
          )}
        />
        <Route
          path="/"
          exact
          render={(props) => (
            <ArticlesContainer {...props} direction={direction} />
          )}
        />
        <Route path="*" render={(_) => <>404</>} />
      </Switch>
    </Container>
  );
}
