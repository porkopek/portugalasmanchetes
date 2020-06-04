import React, { useState, useEffect } from 'react';
import { IArticle } from 'models/IArticle';
import { Grid, Button, colors } from '@material-ui/core';
import InfiniteScroll from 'react-infinite-scroller';
import Article from 'components/article/article';

import GridIcon from '@material-ui/icons/AppsTwoTone';
import ListIcon from '@material-ui/icons/ListTwoTone';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { grey } from '@material-ui/core/colors';
import NewsLoader from 'components/loader/loader';

export default function ArticlesContainer() {
  //state
  const [articles, setArticles] = useState<IArticle[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [language, setLanguage] = useState<string>('');
  const [direction, setDirection] = useState<'row' | 'column'>('row');

  const getApiUrl = () =>
    `https://pokopek.com/api/articles?language=${language}&pagenumber=${pageNumber}`;

  useEffect(() => {
    const fetchArts = async () => {
      const apiUrl = getApiUrl();
      const response = await fetch(apiUrl);
      const arts = await response.json();
      const newArts = [...articles, ...arts];
      setArticles(newArts);
      setPageNumber(pageNumber + 1);
      setIsLoading(false);
    };
    fetchArts();
  }, [language]);

  const loadMore = async () => {
    const apiUrl = getApiUrl();
    const arts = await (await fetch(apiUrl)).json();
    const newArts = [...articles, ...arts];

    setArticles(newArts);
    setPageNumber(pageNumber + 1);
    setIsLoading(false);
  };

  return (
    <InfiniteScroll
      pageStart={0}
      initialLoad={false}
      loadMore={loadMore}
      hasMore={true}
      loader={undefined}
      threshold={2800}
    >
      <Button
        style={{ color: grey[600] }}
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
        style={{ color: grey[600] }}
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
        style={{ color: grey[600] }}
        onClick={() => setDirection(direction === 'row' ? 'column' : 'row')}
      >
        {direction === 'row' ? <GridIcon /> : <ListIcon />}
      </Button>

      <Grid container spacing={2} justify="center">
        {isLoading && <NewsLoader text="A carregar" />}
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
