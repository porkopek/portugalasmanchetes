import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  useTheme,
  Typography,
  makeStyles,
  createStyles,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import StarIcon from '@material-ui/icons/Notifications';
export interface ISubscriptionsProps {
  subscriptions: string[];
  subscriptionType: 'trends' | 'sources';
  position?: 'sticky';
}
const useStyles = makeStyles(() =>
  createStyles({
    stickyPannel: {
      position: 'sticky',
      top: 80,
      maxHeight: '90vh',
      overflow: 'hidden',
      '&:hover': {
        overflowY: 'scroll',
      },
    },
  })
);
export default function SubscriptionsList({
  subscriptions,
  subscriptionType,
  position,
}: ISubscriptionsProps) {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <div className={position === 'sticky' ? classes.stickyPannel : undefined}>
      <Typography
        component="h2"
        variant="h6"
        style={{
          fontWeight: 'bold',
          marginTop: theme.spacing(2),
          marginLeft: theme.spacing(2),
          paddingBottom: 3,
          borderBottom: '1px solid ',
          display: 'inline-block',
        }}
      >
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
                      (subscriptionType === 'trends'
                        ? '/search/'
                        : '/source/') + subscription
                    }
                  >
                    <span style={{ color: theme.palette.text.primary }}>
                      {subscription}
                    </span>
                  </Link>
                </ListItemText>
              </ListItem>
            );
          })}
      </List>
    </div>
  );
}
