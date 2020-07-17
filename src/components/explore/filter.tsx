import React from 'react';
import { makeStyles, Theme, createStyles, fade, InputBase } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: 'rgba(0,0,0,.04)',
      borderRadius: 7,
      padding: theme.spacing(),
      width: '100%',
      maxWidth: 250,
      marginLeft: 24,
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
      paddingLeft: 4,
      transition: theme.transitions.create('width'),

      borderRadius: theme.shape.borderRadius,

      [theme.breakpoints.only('xs')]: {},
    },
  })
);

export interface IFilterProps {
  onChange: (_e: any) => void;
}
export default function Filter({ onChange }: IFilterProps) {
  const classes = useStyles();
  return (
    <div className={classes.search}>
      <InputBase
        placeholder="filtrar"
        onChange={(e) => onChange(e.target.value)}
        classes={{
          root: classes.root,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
      />
    </div>
  );
}
