import React from 'react';

import { Route, Switch, Redirect } from 'react-router';
import ArticlesContainer from 'components/containers/articles-container';
import Explore from 'components/explore/explore';
import { Container } from '@material-ui/core';

interface IRoutesProps {
  direction: 'row' | 'column';
}
const language = localStorage.getItem('language') ?? 'all';
export default function Routes({ direction }: IRoutesProps) {
  return (
    <Container style={{ padding: '28px 0' }}>
      <Switch>
        {/*//-- *** Trends *** */}
        <Route path="/:language/explore/">
          <Explore />
        </Route>

        {/*//-- Searchs: route=>search/ */}
        <Route path="/:language/search/:searchTerm/">
          <ArticlesContainer direction={direction} />
        </Route>
        {/*//-- Searchs: route=>search/ */}
        <Route path="/:language/trends/:tagText/">
          <ArticlesContainer direction={direction} />
        </Route>

        {/*//-- News*/}
        <Route path="/:language/articles/:category/:order/">
          <ArticlesContainer direction={direction} />
        </Route>

        {/*//-- Jornais */}
        <Route path="/source/:domain">
          <ArticlesContainer direction={direction} />
        </Route>

        {/*//-- home */}
        <Route path="/" exact>
          <Redirect to={`/${language}/articles/all/relevant/`} />
        </Route>

        {/*//-- no match =>redirects to origin*/}
        <Route path="*">
          <Redirect to={`/${language}/articles/all/relevant/`} />
        </Route>
      </Switch>
    </Container>
  );
}
