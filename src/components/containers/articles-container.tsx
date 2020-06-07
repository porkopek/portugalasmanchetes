import React, { useState, useEffect } from 'react';
import { IArticle } from 'models/IArticle';
import { Grid, Typography } from '@material-ui/core';
import InfiniteScroll from 'react-infinite-scroller';
import Article from 'components/article/article';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import NewsLoader from 'components/loader/loader';
import { useParams } from 'react-router-dom';

export interface IArticlesContainerProps {
  direction: 'row' | 'column';
  searchTerm?: string;
}
export default function ArticlesContainer({
  direction,
  searchTerm,
}: IArticlesContainerProps) {
  //state
  const [articles, setArticles] = useState<IArticle[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  //pageNumber starts at 2 because first page is loaded by useffect
  const [pageNumber, setPageNumber] = useState<number>(2);

  const { language } = useParams();

  const getApiUrl = (pageNumber: number) =>
    `https://pokopek.com/api/articles?language=${
      language ?? ''
    }&pagenumber=${pageNumber}&search=${searchTerm}`;

  useEffect(() => {
    const fetchArts = async () => {
      const apiUrl = getApiUrl(1);
      const response = await fetch(apiUrl);
      const newArticles = await response.json();

      setArticles(newArticles);
    };

    window.scrollTo(0, 0);
    setIsLoading(true);
    fetchArts();
    setIsLoading(false);
    //2 (two), because the first page has been got here, and the infinite scroll should take the second page
    setPageNumber(2);
  }, [language, searchTerm]);

  //when reaches end of page
  const loadMore = async (p: number) => {
    const apiUrl = getApiUrl(pageNumber);
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
      threshold={300}
      style={{ overflow: 'hidden', padding: '0 8px', minHeight: '100vh' }}
    >
      {searchTerm && articles.length > 0 && (
        <Typography
          component="h2"
          align="center"
          color="textPrimary"
          gutterBottom
          variant="h5"
        >
          Artigos que contêm a palavra <strong>{searchTerm}</strong>
        </Typography>
      )}
      {searchTerm && articles.length === 0 && (
        <Typography
          component="h2"
          align="center"
          color="textPrimary"
          gutterBottom
          variant="h5"
        >
          Não foram encontados artigos relacionados com a palavra{' '}
          <strong>{searchTerm}</strong>
        </Typography>
      )}
      <Grid container spacing={2} justify="center">
        {isLoading && <NewsLoader text="A carregar" />}
        {!isLoading &&
          articles.map((article) => {
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
