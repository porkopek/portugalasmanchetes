import React from 'react';

import { Route, Switch, Redirect } from 'react-router';
import ArticlesContainer from 'components/containers/articles-container';
import Explore from 'components/explore/explore';
import { Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import NotFoundPage from 'components/containers/404';

interface IRoutesProps {
  direction: 'row' | 'column';
}
const language = localStorage.getItem('language') ?? '';
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

        {/*//-- no match */}
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </Container>
  );
}
