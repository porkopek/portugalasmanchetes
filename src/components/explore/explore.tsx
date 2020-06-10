import React from 'react';
import Search from 'components/explore/search';
import Trends from 'components/explore/trends';

export default function Explore() {
  return (
    <>
      <Search />
      <Trends
        trends={[
          'marlaska',
          'pedro sanchez',
          'pablo iglesias',
          'ayuso',
          'alvarez de toledo',
          'coronavirus',
          'covid-19',
          'minimo',
          'españa',
          'portugal',
        ]}
      />
    </>
  );
}
