import React, { useState } from 'react';
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  makeStyles,
  createStyles,
  Theme,
} from '@material-ui/core';
import { Link, useParams } from 'react-router-dom';
import StarIcon from '@material-ui/icons/Notifications';
import { Category } from 'models/category';
import Filter from './filter';
import { ITrendType } from './explore-tabs';

export interface ISubscriptionsProps {
  subscriptions: string[];
  onFilterSubscriptions?: (filterTerm: string) => void;

  subscriptionType: ITrendType;
  position?: 'sticky';
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    stickyPannel: {
      position: 'sticky',
      top: 80,
      maxHeight: '90vh',
      [theme.breakpoints.up('md')]: {
        overflow: 'hidden',
        '&:hover': {
          overflowY: 'auto',
        },
      },
    },
    header: {
      fontWeight: 'bold',
      marginTop: theme.spacing(2),
      marginLeft: theme.spacing(2),
      paddingBottom: 3,
      borderBottom: '1px solid ',
      display: 'inline-block',
    },
    link: {
      color: theme.palette.text.primary,
      '&:hover': {
        color: '#1e88e5',
        transition: 'color .2s',
      },
    },
  })
);
export default function SubscriptionsList({
  subscriptions,
  subscriptionType,
  position,
  onFilterSubscriptions,
}: ISubscriptionsProps) {
  const classes = useStyles();
  const { language } = useParams();

  // url to route the subscription depending on type
  const getUrl = (subscription: string, subscriptionNumber: number) => {
    switch (subscriptionType) {
      case 'categories':
        return (
          `/${language || 'all'}/articles/` + Category[subscriptionNumber].english + '/relevant'
        );

      case 'sources':
        return '/source/' + subscription;

      case 'subscriptions':
        return '/subscriptions';

      case 'trends':
        return `/${language ?? ''}/trends/${subscription}`;
    }
  };

  return (
    <div className={position === 'sticky' ? classes.stickyPannel : undefined}>
      {subscriptionType !== 'categories' && subscriptionType !== 'subscriptions' && (
        <Filter onChange={(e) => onFilterSubscriptions && onFilterSubscriptions(e)} />
      )}
      <List>
        {subscriptions.length > 0 &&
          subscriptions.map((subscription, i) => {
            const link = getUrl(subscription, i);
            return (
              <ListItem key={subscription}>
                <IconButton>
                  <StarIcon />
                </IconButton>

                <ListItemText>
                  <Link to={link}>
                    <span className={classes.link}>{subscription}</span>
                  </Link>
                </ListItemText>
              </ListItem>
            );
          })}
      </List>
    </div>
  );
}
