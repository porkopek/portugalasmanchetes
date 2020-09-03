import { Divider, ListSubheader } from '@material-ui/core';
import { getLocalStorageObject, setLocalStorageObject } from 'lib/utils';
import React, { useState } from 'react';
import SubscriptionsInput from './subscriptions-input';
import SubscriptionsList from './subscriptions-list';

const subscriptionsKey = 'subscriptions';
const storedSubscriptions = getLocalStorageObject<string[]>(subscriptionsKey);
export interface SubscriptionsProps {}
export default function Subscriptions() {
  const [subscriptions, setSubscriptions] = useState(storedSubscriptions ?? []);

  const handleAddSubscription = (value: string) => {
    const newSubs = [...new Set([...subscriptions, value])];
    setLocalStorageObject(subscriptionsKey, newSubs);
    setSubscriptions(newSubs);
  };

  const handleRemoveSubscription = (value: string) => {
    const newSubs = subscriptions.filter((s) => s !== value);
    setLocalStorageObject(subscriptionsKey, newSubs);
    setSubscriptions(newSubs);
  };

  return (
    <div>
      <h4>Acrescenta alguns temas nos que estejas interessado</h4>
      <SubscriptionsInput onAddSubscription={handleAddSubscription} />
      <SubscriptionsList
        subscriptions={subscriptions}
        onRemoveSubscription={handleRemoveSubscription}
      />
    </div>
  );
}
