import React, { FormEvent, useState } from 'react';
import { makeStyles, Theme, createStyles, fade } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import DirectionsIcon from '@material-ui/icons/AddCircle';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: 'rgba(0,0,0,.04)',
      borderRadius: 7,
      padding: theme.spacing(),
      display: 'flex',
      alignItems: 'center',
      width: 400,
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
    },
    iconButton: {
      padding: 10,
    },
  })
);
interface SubscriptionsInputProps {
  onAddSubscription: (e: any) => void;
}

export default function SubscriptionsInput({ onAddSubscription }: SubscriptionsInputProps) {
  const classes = useStyles();
  const [value, setValue] = useState('');

  //adding a word
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    value.trim() && onAddSubscription(value.trim());
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="palavras chave"
        inputProps={{ 'aria-label': 'search google maps' }}
        onChange={(e) => setValue(e.currentTarget.value)}
        value={value}
      />
      <IconButton color="primary" type="submit" className={classes.iconButton} aria-label="search">
        <DirectionsIcon />
      </IconButton>
    </form>
  );
}
