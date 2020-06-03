import React from 'react';
import {
  Card,
  CardHeader,
  makeStyles,
  Theme,
  createStyles,
  Avatar,
  IconButton,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Collapse,
  Link,
  Chip,
} from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import { IArticle } from 'models/IArticle';
import Dotdotdot from 'react-dotdotdot';
export interface ArticleProps {
  article: IArticle;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      marginBottom: '1.2em',
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },

    avatar: {
      backgroundColor: 'transparent',
    },
  })
);

export default function Article({ article }: ArticleProps) {
  const classes = useStyles();
  const {
    description,
    domain,
    imageUrl,
    title,
    friendlyDate,
    imageTitle,
    url,
  } = article;

  return (
    <>
      <Card elevation={0} className={classes.card}>
        <Typography component="span">{article.friendlyDate}</Typography>
        <CardMedia
          className={classes.media}
          image={imageUrl}
          title={imageTitle}
        />
        <CardContent>
          <Typography variant="h2" color="textPrimary" component="h2">
            <Link href={article.url} target="_blank" rel="noopener noreferrer">
              {title}
            </Link>
          </Typography>
          <Link>{article.domain}</Link>
          <Typography variant="body2" color="textSecondary" component="p">
            <Dotdotdot clamp={4}>{description}</Dotdotdot>
          </Typography>
        </CardContent>

        <CardActions disableSpacing draggable={true}>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
}
