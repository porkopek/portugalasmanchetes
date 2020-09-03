import React from 'react';
import {
  createStyles,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Theme,
} from '@material-ui/core';
import RemoveIcon from '@material-ui/icons/RemoveCircleOutline';
import { Link, useParams } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    link: {
      color: theme.palette.text.primary,
      '&:hover': {
        color: '#1e88e5',
        transition: 'color .2s',
      },
    },
  })
);
export interface SubscriptionsListProps {
  subscriptions: string[];
  onRemoveSubscription: (_: any) => void;
}
export default function SubscriptionsList({
  subscriptions,
  onRemoveSubscription,
}: SubscriptionsListProps) {
  const { language } = useParams<any>();
  const classes = useStyles();
  return (
    <List style={{ width: 420 }} dense={true}>
      {subscriptions.map((sub) => (
        <ListItem key={sub}>
          <ListItemIcon>
            <IconButton onClick={(_) => onRemoveSubscription(sub)}>
              <RemoveIcon color="error" />
            </IconButton>
          </ListItemIcon>

          <Link to={`/${language}/search/${sub}/`}>
            <ListItemText className={classes.link}>{sub}</ListItemText>
          </Link>
        </ListItem>
      ))}
    </List>
  );
}
