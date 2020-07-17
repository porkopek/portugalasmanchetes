import React, { useEffect, useState } from 'react';
import Search from 'components/explore/search';
import SubscriptionsList from 'components/explore/subscriptions-list';
import { ITag } from 'models/ITag';
import NewsLoader from 'components/loader/loader';
import { useParams } from 'react-router';

export default function Explore() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  let { language } = useParams();
  if (language === 'all') language = '';

  const [tags, setTags] = useState<ITag[]>([]);
  useEffect(() => {
    setIsLoading(true);
    const fetchTags = async () => {
      const tags: ITag[] = await (
        await fetch(`https://pokopek.com/api/explore/tags/${language}`)
      ).json();
      setTags(tags);
      setIsLoading(false);
    };
    fetchTags();
  }, [language]);
  return (
    <>
      <Search />
      {isLoading ? (
        <NewsLoader />
      ) : tags?.length > 0 ? (
        <SubscriptionsList
          title="Tendências"
          subscriptionType="trends"
          subscriptions={tags?.map((s) => s.text)}
        />
      ) : (
        <h3>Não há tendências para esta língua neste momento. Volta mais tarde</h3>
      )}
    </>
  );
}
