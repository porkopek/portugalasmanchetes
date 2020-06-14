import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  useTheme,
  Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import StarIcon from '@material-ui/icons/Notifications';
export interface ISubscriptionsProps {
  subscriptions: string[];
  subscriptionType: 'trends' | 'sources';
}

export default function SubscriptionsList({
  subscriptions,
  subscriptionType,
}: ISubscriptionsProps) {
  const theme = useTheme();
  return (
    <>
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
    </>
  );
}
