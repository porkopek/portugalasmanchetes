import React, { useEffect } from 'react';
import { TabLabelMenu, useStyles, TabsGroup } from './explore-tab-styles';
import { TabPanel } from './tab-panel';
import { Route, useParams, useHistory } from 'react-router';
export type ITrendType = 'categories' | 'sources' | 'trends' | 'subscriptions';
export default function ExploreTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const { language, trendType } = useParams<{ language: string; trendType: ITrendType }>();
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
          <TabLabelMenu label="Tendencias" />
          <TabLabelMenu label="Subscripções" />
        </TabsGroup>

        <TabPanel
          subscriptionsType="categories"
          value={value}
          language={language}
          index={0}
          staticSubscriptions={[
            'actualidade',
            'desporto',
            'cultura',
            'ciência',
            'história',
            'religião',
            'diversão',
            'tecnologia',
            'tempo',
          ]}
        />

        <TabPanel
          subscriptionsType="sources"
          language={language}
          value={value}
          index={1}
          url={`https://pokopek.com/api/articles/sources/${language}`}
        />

        <TabPanel
          subscriptionsType="trends"
          value={value}
          language={language}
          index={2}
          subscriptionsProperty="text"
          url={`https://pokopek.com/api/explore/tags/${language}`}
        />

        <TabPanel language={language} subscriptionsType="subscriptions" value={value} index={3}>
          Subscripções (brevemente)
          <br />
          <br />
          <br />
        </TabPanel>
      </div>
    </div>
  );
}
