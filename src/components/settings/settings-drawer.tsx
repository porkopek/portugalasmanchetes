import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import CategoryIcon from '@material-ui/icons/Category';

export default function SettingsDrawer() {
  return (
    <Drawer anchor="left" open={true}>
      <List>
        <ListItem>
          <ListItemIcon>
            <CategoryIcon />
          </ListItemIcon>
          <ListItemText>Categorias</ListItemText>
        </ListItem>
      </List>
    </Drawer>
  );
}
