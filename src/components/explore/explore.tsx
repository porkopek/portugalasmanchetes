import React from 'react';
import Search from 'components/explore/search';

import { useParams } from 'react-router';
import ExploreTabs from 'components/explore/explore-tabs';
export default function Explore() {
  let { language } = useParams();

  return (
    <>
      <Search />

      <ExploreTabs language={language} />
    </>
  );
}
