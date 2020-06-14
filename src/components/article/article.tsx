import React, { useState } from 'react';
import FavoriteIcon from '@material-ui/icons/FavoriteBorder';
import ShowIcon from '@material-ui/icons/ChromeReaderModeOutlined';
import CloseIcon from '@material-ui/icons/CloseOutlined';

import {
  makeStyles,
  Theme,
  createStyles,
  IconButton,
  colors,
  useTheme,
  Dialog,
  DialogTitle,
  DialogContent,
  useMediaQuery,
} from '@material-ui/core';
import { red, green } from '@material-ui/core/colors';
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
          : `${theme.spacing(4)}px ${theme.spacing(6)}px`,
      display: 'flex',
      flexDirection: (props: any) => props.direction,
      maxWidth: (props) => (props.direction === 'row' ? '100%' : '32%'),
      minWidth: '100%',
      width: '100%',
      boxShadow: '0 2px 5px rgba(0,0,0,.2)',
    },
    body: { width: '100%' },
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
    closeButton: {
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
      [theme.breakpoints.down('sm')]: {
        position: 'fixed',
        backgroundColor: 'rgba(200,0,0,.4)',
        color: 'white',
        right: 2,
        top: 2,
      },
    },
    dialogTitle: {
      fontWeight: 'bold',
      fontFamily: 'Quattrocento',
      fontSize: '1.8em',
      lineHeight: 1.3,
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
}: IArticleProps) {
  const classes = useStyles({ direction, imageUrl });
  const theme = useTheme();
  const [showDialog, setShowDialog] = useState(false);
  return (
    <>
      <Dialog
        maxWidth="md"
        fullWidth={true}
        scroll="body"
        fullScreen={useMediaQuery(theme.breakpoints.down('sm'))}
        open={showDialog}
        onClose={() => setShowDialog(false)}
      >
        <IconButton
          size="small"
          color="secondary"
          onClick={(_) => setShowDialog(false)}
          className={classes.closeButton}
        >
          <CloseIcon />
        </IconButton>
        <img
          src={imageUrl}
          alt=""
          style={{ width: '100%', objectFit: 'cover' }}
        />
        <div
          style={{
            padding: useMediaQuery(theme.breakpoints.up('md'))
              ? '20px 40px 200px'
              : '0',
          }}
        >
          <DialogTitle disableTypography={true} className={classes.dialogTitle}>
            {title}
          </DialogTitle>
          <DialogContent>
            {fullText.split(/[\n]/g).map((p, i) => (
              <p
                style={{
                  color: theme.palette.grey[800],
                  textAlign: 'justify',
                }}
                key={i}
              >
                {p}
              </p>
            ))}
          </DialogContent>
        </div>
      </Dialog>

      <div className={classes.card}>
        {imageUrl && (
          <img
            className={classes.media}
            src={imageUrl}
            title={imageTitle}
            onError={(e) => (e.currentTarget.style.display = 'none')}
            alt={imageTitle}
          />
        )}
        <div className={classes.body}>
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
                alt="icon"
              ></img>
            </span>
            <span style={{ display: 'inline-flex', flexDirection: 'column' }}>
              <div style={{ color: 'rgba(0,0,0,.8)', fontWeight: 'bold' }}>
                <Link to={`/source/${domain}`}>
                  <span style={{ color: theme.palette.text.primary }}>
                    {domain}
                  </span>
                </Link>
              </div>
              <span style={{ color: 'rgba(0,0,0,.6)' }}>{friendlyDate}</span>
            </span>
            <span className={classes.actions}>
              {fullText && (
                <IconButton
                  color="primary"
                  onClick={(_) => {
                    setShowDialog(!showDialog);
                  }}
                  className={classes.readMore}
                >
                  <ShowIcon />
                </IconButton>
              )}
              <IconButton color={'secondary'} className={classes.heart}>
                <FavoriteIcon />
              </IconButton>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
