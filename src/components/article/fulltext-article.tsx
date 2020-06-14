import React, { useState } from 'react';
import {
  Dialog,
  useMediaQuery,
  IconButton,
  DialogTitle,
  DialogContent,
  useTheme,
  makeStyles,
  createStyles,
  Theme,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/CloseOutlined';
interface IFullTextArticle {
  imageUrl: string;
  title: string;
  fullText: string;
  showDialog: boolean;
  onShowDialog: (e: boolean) => void;
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
export default function FullTextArticle({
  imageUrl,
  title,
  fullText,
  showDialog,
  onShowDialog,
}: IFullTextArticle) {
  const theme = useTheme();

  const classes = useStyles();
  return (
    <Dialog
      maxWidth="md"
      fullWidth={true}
      scroll="body"
      fullScreen={useMediaQuery(theme.breakpoints.down('sm'))}
      open={showDialog}
      onClose={() => onShowDialog(false)}
    >
      <IconButton
        size="small"
        color="secondary"
        onClick={(_) => onShowDialog(false)}
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
  );
}
