import React, { useState } from 'react';
import {
  Container,
  Grid,
  IconButton,
  Button,
  InputBase,
  makeStyles,
  Theme,
  createStyles,
  fade,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import ColumnsIcon from '@material-ui/icons/ViewModule';
import RowsIcon from '@material-ui/icons/ViewStream';
import SearchIcon from '@material-ui/icons/SearchOutlined';

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
      marginRight: theme.spacing(2),
    },
    brand: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '10ch',

      backgroundColor: 'rgba(0,0,0,.08)',
      borderRadius: '2em',
      '&:focus': {
        width: '20ch',
      },
      [theme.breakpoints.only('xs')]: {
        width: '2ch',
        '&:focus': {
          width: '8ch',
        },
      },
    },
  })
);
export default function Nav({
  height = 100,
  onDirectionChanges,
  onHandleSearch,
}: INavProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const classes = useStyles();
  return (
    <nav style={{}} className={classes.root}>
      <Container>
        <Grid container alignItems="center" spacing={0}>
          <Grid item>
            <img
              style={{ height: 30 }}
              src={process.env.PUBLIC_URL + '/favicon.png'}
              alt=""
            />
          </Grid>
          <Grid item>
            <Link to="/es">
              <Button>ES</Button>
            </Link>
          </Grid>
          <Grid item>
            <Link to="/pt">
              <Button>PT</Button>
            </Link>
          </Grid>
          <Grid item>
            <IconButton onClick={onDirectionChanges}>
              <ColumnsIcon style={{ display: 'block' }} />
            </IconButton>
          </Grid>
          <Grid item>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <form
                onSubmit={(_) => {
                  _.preventDefault();
                  onHandleSearch(searchTerm);
                }}
              >
                <InputBase
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.currentTarget.value);
                  }}
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </form>
            </div>
          </Grid>
        </Grid>
      </Container>
    </nav>
  );
}
