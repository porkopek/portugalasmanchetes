import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemAvatar, Avatar, Chip } from '@material-ui/core';
import { TwoLetterLanguage } from 'models/types';
import { ITrend } from 'models/ITrend';
import { Link } from 'react-router-dom';
import { reduceTags } from 'lib/utils';
import NewsLoader from 'components/loader/loader';
import { useCategories } from 'context/settings-context';

export interface DailyTopicListProps {
  language: TwoLetterLanguage;
  daysSince2020First: string;
}
export default function DailyTopicList({ language, daysSince2020First }: DailyTopicListProps) {
  const [dailyTopics, setDailyTopics] = useState<ITrend[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { categories } = useCategories();
  useEffect(() => {
    const url = `https://pokopek.com/api/dailytopics/trends?language=${
      language === 'all' ? '' : language
    }&categories=${categories ?? ''}&dayssince2020first=${daysSince2020First}`;
    const getTopics = async () => {
      setIsLoading(true);

      const topics: ITrend[] = await (await fetch(url)).json();
      setDailyTopics(topics);

      setIsLoading(false);
    };

    getTopics();
  }, [language, categories, daysSince2020First]);

  return (
    <>
      {isLoading && <NewsLoader />}
      <List>
        {dailyTopics.length > 0 &&
          dailyTopics?.map((topic) => {
            return (
              <ListItem
                key={topic.id}
                alignItems="flex-start"
                button
                component={(props) => <Link to={`/${language}/topic/${topic.id}`} {...props} />}
                divider
                style={{ padding: 10, display: 'flex' }}
              >
                <ListItemAvatar>
                  <Avatar src={`${topic.favicon}`} />
                </ListItemAvatar>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ margin: 8 }}>{topic.mainTitle} </h3>
                  <div>
                    {reduceTags(topic.tagsText).map((tag) => (
                      <Chip
                        size="small"
                        label={tag}
                        key={tag}
                        style={{ margin: 2, maxWidth: 250 }}
                      />
                    ))}
                  </div>
                </div>
              </ListItem>
            );
          })}
      </List>
    </>
  );
}
