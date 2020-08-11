import React from 'react';

import { Route, Switch, Redirect } from 'react-router';
import ArticlesContainer from 'components/containers/articles-container';
import Explore from 'components/explore/explore';
import { Container } from '@material-ui/core';
import PrivacyPolicy from 'components/Privacy/privacy-policy';

interface IRoutesProps {
  direction: 'row' | 'column';
}
const language = localStorage.getItem('language') ?? 'all';
export default function Routes({ direction }: IRoutesProps) {
  return (
    <Container style={{ padding: '28px 0' }}>
      <Switch>
        {/*//-- *** Explore *** */}
        <Route path="/:language/explore/:tab?/">
          <Explore />
        </Route>

        {/*//-- Searchs: route=>search/ */}
        <Route path="/:language/search/:searchTerm/">
          <ArticlesContainer direction={direction} />
        </Route>
        {/*//-- Searchs: route=>search/ */}
        <Route path="/topic/:ids/">
          <ArticlesContainer direction={direction} />
        </Route>

        {/*//-- News*/}
        <Route path="/:language/articles/:order/">
          <ArticlesContainer direction={direction} />
        </Route>

        {/*//-- Jornais */}
        <Route path="/source/:domain">
          <ArticlesContainer direction={direction} />
        </Route>

        {/*//-- home */}
        <Route path="/RGPD" exact>
          <PrivacyPolicy />
        </Route>

        {/*//-- home */}
        <Route path="/" exact>
          <Redirect to={`/${language}/articles/relevant/`} />
        </Route>

        {/*//-- no match =>redirects to origin*/}
        <Route path="*">
          <Redirect to={`/${language}/articles/relevant/`} />
        </Route>
      </Switch>
    </Container>
  );
}
