import React from 'react';
import SubscriptionsList from 'components/explore/subscriptions-list';

export default function Categories() {
  return (
    <>
      <SubscriptionsList
        title="Categorias"
        subscriptionType="categories"
        position="sticky"
        subscriptions={[
          'actualidade',
          'desporto',
          'cultura',
          'ciência',
          'história',
          'religião',
          'diversão',
          'tecnologia',
          'tempo',
        ]}
      />
    </>
  );
}
