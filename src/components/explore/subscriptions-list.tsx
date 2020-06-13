import React from 'react';
import {
  List,
  ListItem,
  Divider,
  ListItemIcon,
  ListItemText,
  IconButton,
  useTheme,
  Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import StarIcon from '@material-ui/icons/Notifications';
export interface ISubscriptionsProps {
  subscriptions: string[];
}

export default function SubscriptionsList({ subscriptions }: ISubscriptionsProps) {
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
        Tendências
      </Typography>
      <List>
        {subscriptions.map((trend, index) => {
          return (
            <ListItem key={trend}>
              <IconButton>
                <StarIcon />
              </IconButton>

              <ListItemText>
                <Link to={`/search/${trend}`}>
                  <span style={{ color: theme.palette.text.primary }}>
                    {trend}
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
