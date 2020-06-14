import React from 'react';
import Search from 'components/explore/search';
import SubscriptionsList from 'components/explore/subscriptions-list';

export default function Explore() {
  return (
    <>
      <Search />
      <SubscriptionsList
        subscriptionType="trends"
        subscriptions={[
          'coronavirus',
          'maddie',
          'estatua',
          'floyd',
          'centeno',
          'iglesias',
          'governo',
          'gobierno',
          'praias',
          'covid-19',
          'vox',
          'españa',
          'portugal',
        ]}
      />
    </>
  );
}
