import React, { useEffect } from 'react';
import { TabLabelMenu, useStyles, TabsGroup } from './explore-tab-styles';
import { TabPanel2 } from './tab-panel2';
import { Route, useParams, useHistory } from 'react-router';
import Categories from './categories';
import TabPanel from './tab-panel';
import DailyTopicList from './daily-topic-list';
import { TwoLetterLanguage } from 'models/types';
export type ITrendType = 'categories' | 'sources' | 'trends' | 'subscriptions';
export default function ExploreTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const { language, trendType } = useParams<{
    language: TwoLetterLanguage;
    trendType: ITrendType;
  }>();
  const { push } = useHistory();

  useEffect(() => {
    let newValue = 0;

    switch (trendType) {
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

    if (!trendType) return;

    push(`/${language}/explore/${trendType}`);
  }, [trendType, language]);

  const handleChange = (_: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);

    let newTrendType: ITrendType = 'categories';
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
          <TabLabelMenu label="Categories" />
          <TabLabelMenu label="Jornais" />
          <TabLabelMenu label="Manchetes" />
          <TabLabelMenu label="Subscripções" />
        </TabsGroup>
        {value === 0 && <Categories />}
        <TabPanel2
          subscriptionsType="sources"
          language={language}
          value={value}
          index={1}
          url={`https://pokopek.com/api/articles/sources/${language}`}
        />
        <TabPanel value={value} index={2}>
          <DailyTopicList language={language} />
        </TabPanel>

        {/* <TabPanel
          subscriptionsType="trends"
          value={value}
          language={language}
          index={2}
          subscriptionsProperty="mainTitle"
          url={`https://pokopek.com/api/dailytopics/trends?language=${language}`}
        /> */}

        <TabPanel2 language={language} subscriptionsType="subscriptions" value={value} index={3}>
          Subscripções (brevemente)
          <br />
          <br />
          <br />
        </TabPanel2>
      </div>
    </div>
  );
}
