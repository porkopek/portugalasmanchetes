import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  Typography,
  makeStyles,
  createStyles,
  Theme,
} from '@material-ui/core';
import { Link, useParams } from 'react-router-dom';
import StarIcon from '@material-ui/icons/Notifications';
export interface ISubscriptionsProps {
  subscriptions: string[];
  subscriptionType: 'trends' | 'sources';
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
          overflowY: 'scroll',
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
}: ISubscriptionsProps) {
  const classes = useStyles();
  const { language } = useParams();
  return (
    <div className={position === 'sticky' ? classes.stickyPannel : undefined}>
      <Typography component="h2" variant="h6" className={classes.header}>
        {subscriptionType === 'trends' && 'Tendências'}
        {subscriptionType === 'sources' && 'Jornais'}
      </Typography>
      <List>
        {subscriptions.length > 0 &&
          subscriptions.map((subscription) => {
            return (
              <ListItem key={subscription}>
                <IconButton>
                  <StarIcon />
                </IconButton>

                <ListItemText>
                  <Link
                    to={
                      subscriptionType === 'trends'
                        ? `/search/${subscription}/${language ?? ''}`
                        : '/source/' + subscription
                    }
                  >
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
