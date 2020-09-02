import React, { useEffect } from 'react';
import { TabLabelMenu, useStyles, TabsGroup } from './explore-tab-styles';
import { TabPanelOld } from '../tab-panel-old';
import { useParams, useHistory } from 'react-router';
import CategoriesList from '../categories/categories-list';
import TabPanel from './tab-panel';
import DailyTopicList from '../daily-topics/daily-topic-list';
import { TwoLetterLanguage } from 'models/types';
import { useCategories } from 'context/settings-context';
import SubscriptionsInput from '../subscriptions/subscriptions-input';
import Subscriptions from '../subscriptions/subscriptions';

export type ITab = 'categories' | 'sources' | 'trends' | 'subscriptions';

export default function ExploreTabs({ daysSince2020First }: { daysSince2020First: string }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const { language, tab } = useParams<{
    language: TwoLetterLanguage;
    tab: ITab;
  }>();
  const { push } = useHistory();

  useEffect(() => {
    let newValue = 0;

    switch (tab) {
      case 'trends':
        newValue = 0;
        break;
      case 'sources':
        newValue = 1;
        break;
      case 'categories':
        newValue = 2;
        break;
      case 'subscriptions':
        newValue = 3;
        break;
    }
    setValue(newValue);

    if (!tab) return;

    push(`/${language}/explore/${tab}/${daysSince2020First}`);
  }, [tab, language, daysSince2020First]);

  const handleChange = (_: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);

    let tab: ITab = 'categories';
    switch (newValue) {
      case 0:
        tab = 'trends';
        break;
      case 1:
        tab = 'sources';
        break;
      case 2:
        tab = 'categories';
        break;
      case 3:
        tab = 'subscriptions';
        break;
    }
    //a mudar para ver a hemeroteca
    push(`/${language}/explore/${tab}/${daysSince2020First}`);
  };

  return (
    <div className={classes.root}>
      <div>
        <TabsGroup scrollButtons="on" value={value} onChange={handleChange} aria-label="menú">
          <TabLabelMenu label="Manchetes" />
          <TabLabelMenu label="Jornais" />
          <TabLabelMenu label="Categorias" />
          <TabLabelMenu label="Subscrições" />
        </TabsGroup>

        <TabPanel value={value} index={2}>
          <CategoriesList />
        </TabPanel>

        <TabPanel value={value} index={0}>
          <DailyTopicList language={language} daysSince2020First={daysSince2020First} />
        </TabPanel>

        <TabPanel value={value} index={3}>
          <Subscriptions />
        </TabPanel>

        <TabPanelOld
          subscriptionsType="sources"
          language={language}
          value={value}
          index={1}
          url={`https://pokopek.com/api/articles/sources/${language}`}
        />
      </div>
    </div>
  );
}
