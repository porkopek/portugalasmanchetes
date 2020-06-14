import React, { useState, useEffect } from 'react';
import { IArticle } from 'models/IArticle';
import { Grid, Typography, useMediaQuery, Theme } from '@material-ui/core';
import InfiniteScroll from 'react-infinite-scroller';
import Article from 'components/article/article';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import NewsLoader from 'components/loader/loader';
import { useParams } from 'react-router-dom';
import SubscriptionsList from 'components/explore/subscriptions-list';

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
  const [sources, setSources] = useState<string[]>([]);
  const { language, searchTerm, domain } = useParams();
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('md')
  );
  const getApiUrl = (pageNumber: number) =>
    `https://pokopek.com/api/articles?language=${
      language ?? ''
    }&pagenumber=${pageNumber}&search=${searchTerm ?? ''}&domain=${
      domain ?? ''
    }`;

  //for sources
  useEffect(() => {
    const fetchSources = async () => {
      const papers = await (
        await fetch('https://pokopek.com/api/articles/newspapers')
      ).json();

      setSources(papers.sort());
    };
    fetchSources();
  }, []);

  useEffect(() => {
    const fetchArts = async () => {
      const apiUrl = getApiUrl(1);
      const response = await fetch(apiUrl);
      const newArticles = await response.json();
      setThereIsNoResults(newArticles.length === 0 ? true : false);
      window.scrollTo(0, 0);
      setArticles(newArticles);
      setIsLoading(false);
    };

    setIsLoading(true);
    fetchArts();

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
    <Grid container>
      <Grid item sm={12} md={8}>
        <InfiniteScroll
          pageStart={0}
          initialLoad={false}
          loadMore={loadMore}
          hasMore={true}
          loader={<NewsLoader fontSize={24} />}
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
            {!isLoading &&
              articles.map((article) => {
                return (
                  <Grid
                    item
                    key={article.id}
                    xs={12}
                    sm={direction === 'row' ? 12 : 6}
                    md={direction === 'row' ? 10 : 4}
                    lg={direction === 'row' ? 10 : 4}
                  >
                    <Article direction={direction} {...article} />
                  </Grid>
                );
              })}
          </Grid>
        </InfiniteScroll>
      </Grid>
      <Grid item xs={1} md={3}>
        <SubscriptionsList subscriptions={sources} subscriptionType="sources" />
      </Grid>
    </Grid>
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
