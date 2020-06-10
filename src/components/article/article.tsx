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
import { htmlDecode } from 'lib/utils';
import { Link } from 'react-router-dom';
export interface IArticleProps extends IArticle {
  direction?: 'row' | 'column';
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      borderRadius: '4px',
      backgroundColor: 'white',
      padding: (props) =>
        props.imageUrl
          ? theme.spacing(2)
          : `${theme.spacing(2)}px ${theme.spacing(3)}px`,
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
      [theme.breakpoints.up('xs')]: { maxHeight: 1.25 * 7 + 'em' },
      fontFamily: 'Quattrocento',
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
      fontFamily: 'Montserrat',
      lineHeight: '1.4em',
      maxHeight: 1.4 * 4 + 'em',
      color: 'rgba(0,0,0,.64)',
      overflow: 'hidden',
      [theme.breakpoints.only('xs')]: {
        display: (props) => (props.direction === 'row' ? 'none' : 'block'),
      },
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
  direction,
  description,
  title,
  domain,
  friendlyDate,
  imageTitle,
  imageUrl,
  url,
}: IArticleProps) {
  const classes = useStyles({ direction, imageUrl });
  return (
    <>
      <div className={classes.card}>
        {imageUrl && (
          <img
            className={classes.media}
            src={imageUrl}
            title={imageTitle}
            onError={(e) => (e.currentTarget.style.display = 'none')}
          ></img>
        )}
        <div>
          <h2>
            <a
              className={classes.title}
              href={url}
              target="_blank"
              rel="noreferrer noopener"
            >
              {htmlDecode(title)}
            </a>
          </h2>
          <p className={classes.description}>{description}</p>
          <div className={classes.meta}>
            <span>
              <img
                src={`https://${domain}/favicon.ico`}
                className={classes.avatar}
                onError={(e) => (e.currentTarget.style.display = 'none')}
              ></img>
            </span>
            <span style={{ display: 'inline-flex', flexDirection: 'column' }}>
              <div style={{ color: 'rgba(0,0,0,.8)', fontWeight: 'bold' }}>
                <Link to={`/source/${domain}`}>{domain}</Link>
              </div>
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
