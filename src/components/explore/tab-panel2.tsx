import React, { useState, useEffect } from 'react';
import SubscriptionsList from './subscriptions-list';
import { ITab } from './explore-tabs';
import NewsLoader from 'components/loader/loader';

export interface TabPanelProps {
  children?: React.ReactNode;

  subscriptionsType: ITab;

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
export function TabPanel2(props: TabPanelProps) {
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

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [subscriptions, setSubscriptions] = useState<string[]>([]);
  const [originalSubscriptions, setOriginalSubscriptions] = useState<string[]>([]);

  const transformJson = (json: []) => {
    var result =
      subscriptionsProperty !== undefined
        ? json.map((j) => j[subscriptionsProperty] as string) //.split(' |')[0])
        : json;
    return result as string[];
  };
  useEffect(() => {
    if (url === undefined || staticSubscriptions) {
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    const fetchJson = async () => {
      const json: [] = await (await fetch(url)).json();
      const newSubstriptions = transformJson(json);
      setOriginalSubscriptions(newSubstriptions);
      setSubscriptions(newSubstriptions);
      setIsLoading(false);
    };
    fetchJson();
  }, [language]);

  const handleChange = (filterTerm: string) => {
    let filterPattern = RegExp(filterTerm, 'i');
    let newSubs = originalSubscriptions.filter((s) => filterPattern.test(s));
    setSubscriptions(newSubs);
  };

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {isLoading && <NewsLoader />}
      {isLoading == false && value === index && children}
      {isLoading == false && value === index && (
        <SubscriptionsList
          subscriptionType={subscriptionsType}
          onFilterSubscriptions={handleChange}
          subscriptions={staticSubscriptions || subscriptions}
        />
      )}
    </div>
  );
}
