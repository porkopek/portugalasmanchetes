import React from 'react';
import {
  List,
  ListItem,
  Switch,
  ListItemText,
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core';
import { Category } from 'models/category';
import { useCategories } from 'context/settings-context';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    stickyPannel: {
      position: (props: CategoriesListProps) => props.position,
      top: 180,
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

interface CategoriesListProps {
  position?: 'fixed' | undefined;
}
export default function CategoriesList({ position }: CategoriesListProps) {
  const { categories, setCategories } = useCategories();
  const handleToggleCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    const category = Number(e.target.name);

    let newCategories: number[] = [...categories];

    if (categories.includes(category)) {
      newCategories = categories.filter((c: any) => c !== category);
    } else {
      newCategories.push(category);
    }
    localStorage.setItem('categories', JSON.stringify(newCategories));
    setCategories(newCategories);
  };
  const classes = useStyles({ position });
  return (
    <>
      <div className={classes.stickyPannel}>
        <List>
          {Object.values(Category).map((category, i) => {
            return (
              <ListItem key={category.portuguese}>
                <Switch
                  checked={categories.includes(i)}
                  name={i.toString()}
                  color="primary"
                  onChange={handleToggleCategory}
                  size="small"
                />

                <ListItemText>
                  <span style={{ marginLeft: 8 }}>{category.portuguese}</span>
                </ListItemText>
              </ListItem>
            );
          })}
        </List>
      </div>
    </>
  );
}
