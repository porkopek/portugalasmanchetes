import React, { useEffect } from 'react';
import { TabLabelMenu, useStyles, TabsGroup } from './explore-tab-styles';
import { TabPanel2 } from './tab-panel2';
import { useParams, useHistory } from 'react-router';
import CategoriesList from './categories-list';
import TabPanel from './tab-panel';
import DailyTopicList from './daily-topic-list';
import { TwoLetterLanguage } from 'models/types';
import { getStoredCategoriesString } from 'lib/utils';
export type ITab = 'categories' | 'sources' | 'trends' | 'subscriptions';
let categories: string = '';
export default function ExploreTabs() {
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
      case 'categories':
        newValue = 0;
        break;
      case 'sources':
        newValue = 1;
        break;
      case 'trends':
        newValue = 2;
        break;
      case 'subscriptions':
        newValue = 3;
        break;
    }
    setValue(newValue);
    categories = getStoredCategoriesString();
    if (!tab) return;

    push(`/${language}/explore/${tab}`);
  }, [tab, language]);

  const handleChange = (_: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);

    let newTrendType: ITab = 'categories';
    switch (newValue) {
      case 0:
        newTrendType = 'categories';
        break;
      case 1:
        newTrendType = 'sources';
        break;
      case 2:
        newTrendType = 'trends';
        break;
      case 3:
        newTrendType = 'subscriptions';
        break;
    }

    push(`/${language}/explore/${newTrendType}`);
  };

  return (
    <div className={classes.root}>
      <div>
        <TabsGroup
          scrollButtons="on"
          value={value}
          onChange={handleChange}
          aria-label="ant example"
        >
          <TabLabelMenu label="Categorias" />
          <TabLabelMenu label="Jornais" />
          <TabLabelMenu label="Manchetes" />
          <TabLabelMenu label="Subscrições" />
        </TabsGroup>

        <TabPanel value={value} index={0}>
          <CategoriesList />
        </TabPanel>
        <TabPanel2
          subscriptionsType="sources"
          language={language}
          value={value}
          index={1}
          url={`https://pokopek.com/api/articles/sources/${language}`}
        />
        <TabPanel value={value} index={2}>
          <DailyTopicList language={language} categories={categories} />
        </TabPanel>

        <TabPanel value={value} index={3}>
          Subscrições (brevemente)
          <br />
          <br />
          <br />
        </TabPanel>
      </div>
    </div>
  );
}
