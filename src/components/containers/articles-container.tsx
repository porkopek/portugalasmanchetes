import React, { useState, useEffect } from 'react';
import { IArticle } from 'models/IArticle';
import { Grid, Button, colors } from '@material-ui/core';
import InfiniteScroll from 'react-infinite-scroller';
import Article from 'components/article/article2';
import Loader from 'react-loader-spinner';
import GridIcon from '@material-ui/icons/AppsTwoTone';
import ListIcon from '@material-ui/icons/ListTwoTone';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
export default function ArticlesContainer() {
  const [articles, setArticles] = useState<IArticle[]>([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [language, setLanguage] = useState('ES');
  const [direction, setDirection] = useState<'row' | 'column'>('row');

  const url = (pageNumber: number) =>
    `https://pokopek.com/api/articles?language=${language}&pagenumber=${pageNumber}`;

  useEffect(() => {
    const fetcharts = async () => {
      const arts = await (await fetch(url(pageNumber))).json();
      const newArts = [...articles, ...arts];
      setArticles(newArts);
    };
    fetcharts();
  }, [pageNumber, language]);

  const loadMore = async () => {
    const arts = await (await fetch(url(pageNumber))).json();
    const newArts = [...articles, ...arts];
    setArticles(newArts);

    setPageNumber(pageNumber + 1);
  };

  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={loadMore}
      hasMore={true}
      loader={
        <Loader
          type="ThreeDots"
          color={colors.blue[400]}
          height={100}
          width={100}
        />
      }
      threshold={2800}
    >
      <Button
        onClick={() => {
          setLanguage('ES');
          setArticles([]);
          setPageNumber(1);
        }}
      >
        ES
      </Button>
      <Button
        onClick={() => {
          setLanguage('PT');
          setArticles([]);
          setPageNumber(1);
        }}
      >
        PT
      </Button>
      <Button
        onClick={() => setDirection(direction === 'row' ? 'column' : 'row')}
      >
        {direction === 'row' ? <GridIcon /> : <ListIcon />}
      </Button>

      <Grid container spacing={2} justify="center">
        {articles.map((article) => {
          return (
            <Grid item key={article.url} xs={direction === 'row' ? 8 : 4}>
              <Article direction={direction} {...article} />
            </Grid>
          );
        })}
      </Grid>
    </InfiniteScroll>
  );
}
