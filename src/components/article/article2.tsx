import React from 'react';
import FavoriteIcon from '@material-ui/icons/FavoriteBorder';

import {
  makeStyles,
  Theme,
  createStyles,
  Typography,
  Hidden,
  IconButton,
  colors,
} from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { IArticle } from 'models/IArticle';

export interface IArticleProps extends IArticle {
  direction?: 'row' | 'column';
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      borderRadius: '4px',
      backgroundColor: 'white',
      padding: theme.spacing(2),
      display: 'flex',
      flexDirection: (props: any) => props.direction,
      maxWidth: (props) => (props.direction === 'row' ? '100%' : '32%'),
      minWidth: '100%',
      width: '100%',
      boxShadow: '0 2px 5px rgba(0,0,0,.2)',
    },
    media: {
      borderRadius: '4px',
      marginRight: (props) =>
        props.direction === 'row' ? theme.spacing(3) : 0,
      objectFit: 'cover',
      objectPosition: 'center',
      flexBasis: (props) => (props.direction === 'row' ? '32%' : '100%'),
      width: (props) => (props.direction === 'row' ? '32%' : '100%'),
      minWidth: (props) => (props.direction === 'row' ? '32%' : '100%'),
      height: (props) => (props.direction === 'column' ? 200 : 'auto'),
      maxHeight: (props) => (props.direction === 'column' ? 200 : 250),
      overflow: 'hidden',
      backgroundColor: 'lightgray',
    },
    title: {
      lineHeight: '1.25em',
      overflow: 'hidden',
      maxHeight: 1.25 * 3 + 'em',
      marginBottom: '.75rem',
      color: 'rgba(0,0,0,.8)',
      textDecoration: 'none',
      display: 'block',
      '&:hover': {
        color: colors.blue[600],
        transition: 'color .3s',
      },
    },
    description: {
      fontSize: '1rem',
      lineHeight: '1.4em',
      maxHeight: 1.4 * 4 + 'em',
      color: 'rgba(0,0,0,.64)',
      overflow: 'hidden',
    },
    meta: { fontSize: 14 },
    avatar: {
      width: 40,
      height: 40,
      marginRight: '0.8em',
      borderRadius: '50%',
      float: 'left',
    },

    actions: {
      float: 'right',
      display: 'flex',
      height: 40,
      width: 80,
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },
    heart: {
      display: 'flex',
      color: 'rgba(0,0,0,.2)',
      '&:hover': {
        color: red[500],
      },
    },
  })
);
export default function Article({
  direction = 'row',
  description,
  title,
  domain,
  friendlyDate,
  imageTitle,
  imageUrl,
  url,
}: IArticleProps) {
  const classes = useStyles({ direction });
  return (
    <>
      <div className={classes.card}>
        <img className={classes.media} src={imageUrl} title={imageTitle}></img>
        <div>
          <h2>
            <a
              className={classes.title}
              href={url}
              target="_blank"
              rel="noreferrer noopener"
            >
              {title}
            </a>
          </h2>
          <p className={classes.description}>{description}</p>
          <div className={classes.meta}>
            <span>
              <img
                src={`https://${domain}/favicon.ico`}
                className={classes.avatar}
              ></img>
            </span>
            <span style={{ display: 'inline-flex', flexDirection: 'column' }}>
              <span style={{ color: 'rgba(0,0,0,.8)' }}>{domain}</span>
              <span style={{ color: 'rgba(0,0,0,.6)' }}>{friendlyDate}</span>
            </span>
            <span className={classes.actions}>
              <IconButton color={'secondary'} className={classes.heart}>
                <FavoriteIcon />
              </IconButton>
              <span>50</span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
