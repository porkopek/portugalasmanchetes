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
  const [language, setLanguage] = useState('');
  const [direction, setDirection] = useState<'row' | 'column'>('row');

  const getApiUrl = () =>
    `https://pokopek.com/api/articles?language=${language}&pagenumber=${pageNumber}`;

  useEffect(() => {
    const fetcharts = async () => {
      const apiUrl = getApiUrl();
      const response = await fetch(apiUrl);
      const arts = await response.json();
      const newArts = [...articles, ...arts];
      setArticles(newArts);
      setPageNumber(pageNumber + 1);
    };
    fetcharts();
  }, [language]);

  const loadMore = async () => {
    const apiUrl = getApiUrl();
    const arts = await (await fetch(apiUrl)).json();
    const newArts = [...articles, ...arts];
    setArticles(newArts);

    setPageNumber(pageNumber + 1);
  };

  return (
    <InfiniteScroll
      pageStart={0}
      initialLoad={false}
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
          if (language === 'ES') return;
          setLanguage('ES');
          setArticles([]);
          setPageNumber(1);
        }}
      >
        ES
      </Button>
      <Button
        onClick={() => {
          if (language === 'PT') return;
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
            <Grid
              item
              key={article.url}
              xs={12}
              sm={direction === 'row' ? 12 : 6}
              md={direction === 'row' ? 10 : 4}
              lg={direction === 'row' ? 8 : 4}
            >
              <Article direction={direction} {...article} />
            </Grid>
          );
        })}
      </Grid>
    </InfiniteScroll>
  );
}
