import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemAvatar, Avatar, ListItemText, Chip } from '@material-ui/core';
import { TwoLetterLanguage } from 'models/types';
import { IDailyTopic } from 'models/IDailyTopic';
import { Link } from 'react-router-dom';
import { reduceTags } from 'lib/utils';

export interface DailyTopicListProps {
  language: TwoLetterLanguage;
  category?: number;
}
export default function DailyTopicList({ language, category }: DailyTopicListProps) {
  const [dailyTopics, setDailyTopics] = useState<IDailyTopic[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const url = `https://pokopek.com/api/dailytopics/trends?language=${language}&category=${
      category ?? ''
    }`;
    const getTopics = async () => {
      setIsLoading(true);

      const topics: IDailyTopic[] = await (await fetch(url)).json();
      setDailyTopics(topics);

      setIsLoading(false);
    };

    getTopics();
  }, [language, category]);

  return (
    <List>
      {dailyTopics?.map((topic) => {
        const ids = topic.articlesIds.join(',');
        return (
          <ListItem
            key={topic.id}
            alignItems="flex-start"
            button
            component={(props) => <Link to={`/topic/${ids}`} {...props} />}
            divider
            style={{ padding: 10, display: 'flex', alignItems: 'centar' }}
          >
            <ListItemAvatar>
              <Avatar src={`${topic.favicon}`} />
            </ListItemAvatar>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ margin: 8 }}>{topic.mainTitle} </h3>
              <div>
                {reduceTags(topic.tagsText).map((tag) => (
                  <Chip size="small" label={tag} key={tag} style={{ margin: 2, maxWidth: 250 }} />
                ))}
              </div>
            </div>
          </ListItem>
        );
      })}
    </List>
  );
}
