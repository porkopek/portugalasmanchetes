import React from 'react';

import { Route, Switch, Redirect } from 'react-router';
import ArticlesContainer from 'components/containers/articles-container';
import Explore from 'components/explore/explore';
import { Container } from '@material-ui/core';

interface IRoutesProps {
  direction: 'row' | 'column';
}
const language = localStorage.getItem('initialFlag') ?? '';
export default function Routes({ direction }: IRoutesProps) {
  return (
    <Container style={{ padding: '28px 0' }}>
      <Switch>
        {/* Trends: route=>"explore/" */}
        <Route path="/explore/:language?" render={(_) => <Explore />} />
        {/* Searchs: route=>search/ */}
        <Route
          path="/search/:searchTerm/:language?"
          render={(props) => (
            <ArticlesContainer {...props} direction={direction} />
          )}
        />
        {/* News:route=>"news/" */}
        <Route
          path="/news/:order/:language?"
          render={(props) => (
            <ArticlesContainer {...props} direction={direction} />
          )}
        />
        {/* Comments:route=>"news/" */}
        <Route path="/comments/:articleId" render={(props) => 'TODO'} />

        {/* Jornais. Route="/source" */}
        <Route
          path="/source/:domain"
          render={(props) => (
            <ArticlesContainer {...props} direction={direction} />
          )}
        />
        <Route
          path="/"
          exact
          render={(props) => <Redirect to={`/news/relevant/${language}`} />}
        />
        <Route path="*" render={(_) => <>404</>} />
      </Switch>
    </Container>
  );
}
