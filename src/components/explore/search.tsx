import React, { useState } from 'react';
import {
  makeStyles,
  Theme,
  createStyles,
  fade,
  InputBase,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/SearchOutlined';
import { Redirect, useHistory } from 'react-router';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      backgroundColor: 'rgba(0,0,0,.04)',
      borderRadius: 7,
      padding: theme.spacing(),
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
      width: '100%',
      borderRadius: theme.shape.borderRadius,

      [theme.breakpoints.only('xs')]: {},
    },
  })
);

export interface ISearchProps {
  onHandleSearch: (searchTerm: string) => void;
}
export default function Search({ onHandleSearch }: ISearchProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const classes = useStyles();
  const { push } = useHistory();
  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <form
        onSubmit={(_) => {
          _.preventDefault();
          push(`/search/${searchTerm}`);
        }}
      >
        <InputBase
          value={searchTerm}
          placeholder="Procurar em Portugal às Manchetes"
          onChange={(e) => {
            setSearchTerm(e.currentTarget.value);
          }}
          classes={{
            root: classes.root,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
        />
      </form>
    </div>
  );
}
