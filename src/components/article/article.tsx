import React, { useState } from 'react';
import FavoriteIcon from '@material-ui/icons/FavoriteBorder';
import ShowIcon from '@material-ui/icons/ChromeReaderModeOutlined';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

import {
  makeStyles,
  Theme,
  createStyles,
  IconButton,
  colors,
  useTheme,
  Hidden,
} from '@material-ui/core';
import { red, green } from '@material-ui/core/colors';
import { IArticle } from 'models/IArticle';
import { Link } from 'react-router-dom';
import FullTextArticle from './fulltext-article';
import { Category, CategoryColor } from 'models/category';
export interface IArticleProps extends IArticle {
  direction?: 'row' | 'column';
  bordered?: boolean;

  onDescriptionTextSelected?: (id: number, text?: string) => void;
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      borderRadius: '4px',
      backgroundColor: (props) => (props.direction === 'row' ? 'white' : 'transparent'),
      padding: (props) =>
        props.imageUrl || props.direction === 'column'
          ? theme.spacing(2)
          : `${theme.spacing(4)}px ${theme.spacing(6)}px`,
      display: 'flex',
      flexDirection: (props: any) => props.direction,
      maxWidth: (props) => (props.direction === 'row' ? '100%' : '32%'),
      minWidth: '100%',
      width: '100%',
      boxShadow: (props) => (props.bordered ? '0 2px 5px rgba(0,0,0,.2)' : 'none'),
    },
    body: { width: '100%', overflow: 'hidden' },
    media: {
      borderRadius: '4px',
      marginRight: (props) => (props.direction === 'row' ? theme.spacing(3) : 0),
      objectFit: 'cover',
      objectPosition: 'center',
      flexBasis: (props) => (props.direction === 'row' ? '32%' : '100%'),
      width: (props) => (props.direction === 'row' ? '32%' : '100%'),
      minWidth: (props) => (props.direction === 'row' ? '32%' : '100%'),
      height: (props) => (props.direction === 'column' ? 150 : 'auto'),
      maxHeight: (props) => (props.direction === 'column' ? 150 : 250),
      minHeight: (props) => (props.direction === 'column' ? 150 : 'unset'),
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
      color: theme.palette.text.primary,
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
    category: {
      color: (props) => (CategoryColor as any)[props.categoryNumber].backgroundColor,

      padding: '2px 6px',
      borderRadius: '2em',
      fontSize: 10,
      display: 'inline-block',
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
      color: 'rgba(0,0,0,.3)',
      '&:hover': {
        color: red[500],
      },
    },
    readMore: {
      display: 'flex',
      color: 'rgba(0,0,0,.3)',
      '&:hover': {
        color: green[500],
        backgroundColor: 'rgba(0, 100, 0, 0.03)',
      },
    },
    visited: {
      padding: '2px 4px',
      fontSize: 12,
      color: green[500],
      marginTop: 16,
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
  fullText,
  url,
  id,
  ranking,
  category: categoryNumber,
  onDescriptionTextSelected,
  clicks,
  favicon,
  language,
  bordered = false,
}: IArticleProps) {
  const classes = useStyles({ direction, imageUrl, categoryNumber, bordered });

  const theme = useTheme();
  const [showDialog, setShowDialog] = useState(false);
  async function handleVisit() {
    await (await fetch(`https://pokopek.com/api/articles/newvisit/${id}`)).json();
  }
  return (
    <>
      <div className={classes.card} data-id={id} data-ranking={ranking}>
        {imageUrl && (
          <img
            className={classes.media}
            src={imageUrl.replace('http:', 'https:')}
            title={imageTitle}
            onError={(e) => (e.currentTarget.style.display = 'none')}
            alt={imageTitle}
          />
        )}
        <div className={classes.body}>
          <span className={classes.category}>
            <Link to={`/all/articles/` + Category[categoryNumber].english + '/relevant'}>
              {Category[categoryNumber].portuguese}
            </Link>
          </span>

          <h2 style={{ marginTop: 0 }}>
            <a
              onClick={handleVisit}
              className={classes.title}
              href={url}
              target="_blank"
              rel="noreferrer noopener"
            >
              {title}
            </a>
          </h2>
          <p
            className={classes.description}
            onMouseUp={() =>
              onDescriptionTextSelected &&
              onDescriptionTextSelected(id, window.getSelection()?.toString().trim())
            }
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>
          <div className={classes.meta}>
            <img
              src={favicon}
              className={classes.avatar}
              onError={(e) => (e.currentTarget.style.display = 'none')}
              alt="icon"
              style={favicon === null ? { display: 'none' } : undefined}
            />

            <span style={{ display: 'inline-flex', flexDirection: 'column' }}>
              <div style={{ color: 'rgba(0,0,0,.8)', fontWeight: 'bold' }}>
                <Link to={`/${language.toLowerCase()}/source/${domain}/`}>
                  <span style={{ color: theme.palette.text.primary }}>{domain}</span>
                </Link>
              </div>
              <span style={{ color: 'rgba(0,0,0,.6)' }}>{friendlyDate}</span>
            </span>
            <span className={classes.actions}>
              <Hidden smUp>
                <a href={`whatsapp://send?text=${url} (via Às Manchetes)`}>
                  <IconButton color={'primary'} className={classes.readMore}>
                    <WhatsAppIcon />
                  </IconButton>
                </a>
              </Hidden>
              {fullText && (
                <IconButton
                  color="primary"
                  onClick={(_) => {
                    // -- TODO close modal with back button
                    //  push(`${path}#${id}`);
                    handleVisit();
                    setShowDialog(!showDialog);
                  }}
                  className={classes.readMore}
                >
                  <ShowIcon />
                  {clicks !== 0 && <span className={classes.visited}>{clicks}</span>}
                </IconButton>
              )}
              <IconButton color={'secondary'} className={classes.heart}>
                <FullTextArticle
                  title={title}
                  imageUrl={imageUrl}
                  fullText={fullText}
                  showDialog={showDialog}
                  onShowDialog={setShowDialog}
                />
                <FavoriteIcon />
              </IconButton>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
