import React from 'react';
import Search from 'components/explore/search';

import ExploreTabs from 'components/explore/explore-tabs';
export default function Explore({ daysSince2020First }: { daysSince2020First: string }) {
  return (
    <>
      <Search />

      <ExploreTabs daysSince2020First={daysSince2020First} />
    </>
  );
}
