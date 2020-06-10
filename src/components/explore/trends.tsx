import React from 'react';
import {
  List,
  ListItem,
  Divider,
  ListItemIcon,
  ListItemText,
  IconButton,
  useTheme,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import StarIcon from '@material-ui/icons/Notifications';
export interface ITrendsProps {
  trends: string[];
}

export default function Trends({ trends }: ITrendsProps) {
  const theme = useTheme();
  return (
    <List>
      {trends.map((trend, index) => {
        return (
          <>
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
          </>
        );
      })}
    </List>
  );
}
