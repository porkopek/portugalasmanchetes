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
}
export default function ArticlesContainer({
  direction,
}: IArticlesContainerProps) {
  //state
  const [articles, setArticles] = useState<IArticle[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [thereIsNoResults, setThereIsNoResults] = useState(false);
  //pageNumber starts at 2 because first page is loaded by useffect
  const [pageNumber, setPageNumber] = useState<number>(2);

  const { language, searchTerm, domain } = useParams();

  const getApiUrl = (pageNumber: number) =>
    `https://pokopek.com/api/articles?language=${
      language ?? ''
    }&pagenumber=${pageNumber}&search=${searchTerm ?? ''}&domain=${
      domain ?? ''
    }`;

  useEffect(() => {
    const fetchArts = async () => {
      const apiUrl = getApiUrl(1);
      const response = await fetch(apiUrl);
      const newArticles = await response.json();
      setThereIsNoResults(newArticles.length === 0 ? true : false);
      window.scrollTo(0, 0);
      setArticles(newArticles);
    };

    setIsLoading(true);
    fetchArts();

    setIsLoading(false);
    //2 (two), because the first page has been got here, and the infinite scroll should take the second page
    setPageNumber(2);
  }, [language, domain]);

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
      style={{ overflow: 'hidden', padding: '0 8px', minHeight: '100vh' }}
    >
      {searchTerm &&
        articles.length > 0 &&
        Message('Artigos que contêm a palavra', searchTerm)}
      {thereIsNoResults &&
        Message(
          'Não foram encontrados artigos relacionados com a palavra ',
          searchTerm
        )}
      <Grid container spacing={2}>
        {isLoading && <NewsLoader text="A carregar" />}
        {!isLoading &&
          articles.map((article) => {
            return (
              <Grid
                item
                key={article.id}
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
function Message(message: string, searchTerm: string): React.ReactNode {
  return (
    <Typography
      component="h2"
      color="textPrimary"
      style={{ margin: '1rem' }}
      variant="h6"
    >
      {message} <strong>{searchTerm}</strong>
    </Typography>
  );
}
