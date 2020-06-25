import React from 'react';
import {
  Container,
  Grid,
  IconButton,
  Button,
  makeStyles,
  Theme,
  createStyles,
  fade,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import ColumnsIcon from '@material-ui/icons/ViewModule';
import SearchIcon from '@material-ui/icons/ExploreOutlined';

export interface INavProps {
  height?: number;
  onDirectionChanges: () => void;
  onHandleSearch: (searchTerm: string) => void;
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      zIndex: 10,
      padding: 10,
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: 'white',
    },
    menuButton: {
      [theme.breakpoints.down('sm')]: {
        minWidth: 44,
      },
    },
    brand: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
  })
);
export default function Nav({ onDirectionChanges }: INavProps) {
  const classes = useStyles();
  return (
    <nav style={{}} className={classes.root}>
      <Container>
        <Grid container alignItems="center" spacing={0}>
          <Grid item>
            <Link to="/">
              <img
                style={{ height: 30 }}
                src={process.env.PUBLIC_URL + '/favicon.png'}
                alt=""
              />
            </Link>
          </Grid>
          <Grid item>
            <Link to="/language/es">
              <Button className={classes.menuButton}>ES</Button>
            </Link>
          </Grid>
          <Grid item>
            <Link to="/language/en">
              <Button className={classes.menuButton}>EN</Button>
            </Link>
          </Grid>
          <Grid item>
            <Link to="/language/pt">
              <Button className={classes.menuButton}>PT</Button>
            </Link>
          </Grid>
          <Grid item>
            <Link to="/explore">
              <IconButton>
                <SearchIcon />
              </IconButton>
            </Link>
          </Grid>
          <Grid item>
            <IconButton onClick={onDirectionChanges}>
              <ColumnsIcon style={{ display: 'block' }} />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </nav>
  );
}
