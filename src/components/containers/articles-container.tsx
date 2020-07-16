import React, { useState, useEffect } from 'react';
import { IArticle } from 'models/IArticle';
import { Grid, Typography, useMediaQuery, useTheme } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

import Article from 'components/article/article';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import NewsLoader from 'components/loader/loader';
import { useParams } from 'react-router-dom';
import SubscriptionsList from 'components/explore/subscriptions-list';
import InfiniteScroll from 'components/infinite-scroll/infinite-scroll';
import { IPagination } from 'models/IPagination';
import Categories from 'components/explore/categories';
import { Category } from 'models/category';
import { stringify } from 'querystring';

export interface IArticlesContainerProps {
  direction: 'row' | 'column';
}

export default function ArticlesContainer({ direction }: IArticlesContainerProps) {
  //state
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'), { noSsr: true });
  const [err, setErr] = useState<Boolean>(false);
  const [, setPagination] = useState<IPagination>();

  const [articles, setArticles] = useState<IArticle[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [noSearchResults, setNoSearchResults] = useState<boolean>(false);

  //pageNumber starts at 2 because first page is loaded by useffect
  const [pageNumber, setPageNumber] = useState<number>(2);
  const [sources, setSources] = useState<string[]>([]);
  let { language, searchTerm, domain, order, category } = useParams();
  //if language is not set
  language = language ?? localStorage.getItem('language') ?? 'all';

  const getApiUrl = (pageNumber: number) => {
    return `https://pokopek.com/api/articles?language=${
      language && language !== 'all' ? language : ''
    }&pagenumber=${pageNumber}&search=${searchTerm ?? ''}&domain=${
      domain ?? ''
    }&category=${category}&order=${order ?? ''}`;
  };

  //for sources
  useEffect(() => {
    if (isMobile) {
      return;
    }
    const fetchSources = async () => {
      const papers = await (await fetch('https://pokopek.com/api/articles/sources')).json();

      setSources(papers.sort());
    };
    fetchSources();
  }, []);

  // for fetch articles
  //--Could be custom hook!
  useEffect(() => {
    const fetchArts = async () => {
      const apiUrl = getApiUrl(1);
      try {
        const response = await fetch(apiUrl);
        let paginationHeaders = response.headers.get('X-Pagination')!;
        let paginationJson: IPagination = JSON.parse(paginationHeaders);
        setPagination(paginationJson);
        const newArticles = await response.json();

        setNoSearchResults(newArticles.length === 0 ? true : false);
        setArticles(newArticles);
        setErr(false);
      } catch {
        setErr(true);
      }

      setIsLoading(false);
    };

    setIsLoading(true);
    fetchArts();

    //2 (two), because the first page has been got here, and the infinite scroll should take the second page
    setPageNumber(2);
    //-- useEffect dependencies array
  }, [language, domain, order, category, searchTerm]);

  //when reaches end of page
  const loadMore = async () => {
    if (isLoading) return;
    const apiUrl = getApiUrl(pageNumber);
    const arts = await (await fetch(apiUrl)).json();
    const newArts = [...articles, ...arts];

    setArticles(newArts);
    setPageNumber(pageNumber + 1);
    setIsLoading(false);
  };

  const handleSelectDescriptionText = (articleId: number, selectedText?: string) => {
    if (!selectedText?.trim()) {
      return;
    }
    let article = articles.find((a) => a.id === articleId)!;
    let description = article.description.replace(
      selectedText,
      `<a href="/#/${language}/search/${selectedText}" style="font-weight:bold;color:blue;text-decoration:underline">${selectedText}</a>`
    );
    let newArticles = [...articles];
    newArticles.find((a) => a.id === articleId)!.description = description;

    setArticles(newArticles);
  };

  return (
    <Grid container>
      {err && (
        <Alert severity="error">
          Pedimos desculpas. Neste momento, o site está a implementar algumas mudanças. Volte mais
          tarde
        </Alert>
      )}
      <Grid item sm={12} md={8}>
        <InfiniteScroll
          dataLength={articles.length}
          next={loadMore}
          hasMore={true}
          loader={null}
          style={{ overflow: 'hidden', padding: '0 8px' }}
        >
          {searchTerm && articles.length > 0 && Message('Artigos que contêm a palavra', searchTerm)}
          {noSearchResults &&
            Message('Não foram encontrados artigos relacionados com a palavra ', searchTerm)}
          <Grid container spacing={2}>
            {isLoading && <NewsLoader fontSize={24} />}
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
                    <Article
                      direction={direction}
                      {...article}
                      onDescriptionTextSelected={handleSelectDescriptionText}
                    />
                  </Grid>
                );
              })}
          </Grid>
        </InfiniteScroll>
      </Grid>
      {!isMobile && (
        <Grid item md={3}>
          <Categories />
          {/* <SubscriptionsList
            subscriptions={sources}
            subscriptionType="sources"
            position="sticky"
          /> */}
        </Grid>
      )}
    </Grid>
  );
}
function Message(message: string, searchTerm: string): React.ReactNode {
  return (
    <Typography component="h2" color="textPrimary" style={{ margin: '1rem' }} variant="h6">
      {message} <strong>{searchTerm}</strong>
    </Typography>
  );
}
