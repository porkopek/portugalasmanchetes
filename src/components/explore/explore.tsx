import React from 'react';
import Search from 'components/explore/search';
import SubscriptionsList from 'components/explore/subscriptions-list';

export default function Explore() {
  return (
    <>
      <Search />
      <SubscriptionsList
        title="Tendências"
        subscriptionType="trends"
        subscriptions={[
          'coronavirus',
          'covid',
          'mortos',
          'casos',
          'trump',
          'nova normalidade',
          'governo',
          'praias',
          'espanha',
          'portugal',
        ]}
      />
    </>
  );
}
