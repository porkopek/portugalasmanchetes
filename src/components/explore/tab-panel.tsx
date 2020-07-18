import React, { useState, useEffect } from 'react';
import SubscriptionsList, { SubscriptionsType } from './subscriptions-list';

export interface TabPanelProps {
  children?: React.ReactNode;

  subscriptionsType: SubscriptionsType;

  //if we already have the subscriptions and not need to fetch,
  //because is a fixed string, pass them in this property
  staticSubscriptions?: string[];

  index: any;

  value: any;
  language: string;

  //The url of the API to fetch the subscriptions
  url?: string;

  //the property of the object returned by the API where is the text
  subscriptionsProperty?: string;
}
export function TabPanel(props: TabPanelProps) {
  const {
    children,
    value,
    index,
    url,
    subscriptionsProperty,
    staticSubscriptions,
    subscriptionsType,
    language,
    ...other
  } = props;

  const [, setIsLoading] = useState<boolean>(true);
  const [subscriptions, setSubscriptions] = useState<string[]>([]);
  const transformJson = (json: []) => {
    var result =
      subscriptionsProperty !== undefined ? json.map((j) => j[subscriptionsProperty]) : json;
    return result as string[];
  };
  useEffect(() => {
    if (url === undefined || staticSubscriptions) return;

    setIsLoading(true);
    const fetchJson = async () => {
      const json: [] = await (await fetch(url)).json();
      setSubscriptions(transformJson(json));
      setIsLoading(false);
    };
    fetchJson();
  }, [url, language]);

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      style={{ padding: '16px 8px' }}
      {...other}
    >
      {value === index && children}
      {value === index && (
        <SubscriptionsList
          subscriptionType={subscriptionsType}
          subscriptions={staticSubscriptions || subscriptions}
        />
      )}
    </div>
  );
}
