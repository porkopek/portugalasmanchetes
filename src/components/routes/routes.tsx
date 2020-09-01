import React from 'react';

import { Route, Switch, Redirect } from 'react-router';
import ArticlesContainer from 'components/containers/articles-container';
import Explore from 'components/explore/explore';
import PrivacyPolicy from 'components/Privacy/privacy-policy';
import FrontContainer from 'components/containers/front-container';

interface IRoutesProps {
  direction: 'row' | 'column';
  daysSince2020First: string;
}
const language = localStorage.getItem('language') ?? 'all';
export default function Routes({ direction, daysSince2020First }: IRoutesProps) {
  return (
    <>
      <Switch>
        {/*//-- *** Explore *** */}
        <Route path={`/:language/explore/:tab/:daysSince2020First?/`}>
          <Explore daysSince2020First={daysSince2020First} />
        </Route>

        {/*//-- Searchs: route=>search/ */}
        <Route path="/:language/search/:searchTerm/">
          <ArticlesContainer direction={direction} />
        </Route>
        {/*//-- daily topics */}
        <Route path="/:language/topic/:topicId/">
          <ArticlesContainer direction={direction} />
        </Route>

        {/*//-- News*/}
        <Route path={`/:language/articles/:order/:daysSince2020First?/`}>
          <ArticlesContainer direction={direction} />
        </Route>

        {/*//-- Front*/}
        <Route path={`/:language/front/`}>
          <FrontContainer direction={direction} />
        </Route>

        {/*//-- Jornais */}
        <Route path="/:language/source/:domain/:daysSince2020First?/">
          <ArticlesContainer direction={direction} />
        </Route>

        {/*//-- RGOD */}
        <Route path="/:language/RGPD" exact>
          <PrivacyPolicy />
        </Route>

        {/*//-- home */}
        <Route path="/" exact>
          <Redirect to={`/${language}/front/`} />
        </Route>

        {/*//-- no match =>redirects to origin*/}
        <Route path="*">
          <Redirect to={`/${language}/front/`} />
        </Route>
      </Switch>
    </>
  );
}
