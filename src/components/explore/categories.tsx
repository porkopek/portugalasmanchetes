import React from 'react';
import SubscriptionsList from 'components/explore/subscriptions-list';

export default function Categories() {
  return (
    <>
      <SubscriptionsList
        title="Categorias"
        subscriptionType="trends"
        position="sticky"
        subscriptions={[
          'noticias',
          'desporto',
          'cultura',
          'tecnologia',
          'ciência',
          'diversão',
          'história',
          'religião',
        ]}
      />
    </>
  );
}
