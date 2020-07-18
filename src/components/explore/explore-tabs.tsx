import React from 'react';
import { TabLabelMenu, useStyles, TabsGroup } from './explore-tab-styles';
import { TabPanel } from './tab-panel';

interface IExploreTabsProps {
  language: string;
}
export default function ExploreTabs({ language }: IExploreTabsProps) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (_: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
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
        </TabPanel>
      </div>
    </div>
  );
}
