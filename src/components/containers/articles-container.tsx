import React, { useState, useEffect } from 'react';
import { IArticle } from 'models/IArticle';
import { Grid, useMediaQuery, useTheme } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

import Article from 'components/article/article';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import NewsLoader from 'components/loader/loader';
import { useParams } from 'react-router-dom';
import InfiniteScroll from 'components/infinite-scroll/infinite-scroll';
import { IPagination } from 'models/IPagination';
import CategoriesList from 'components/explore/categories-list';
import { translateIntoPortuguese } from 'lib/localizer';
import { useCategories } from 'context/settings-context';
import { getApiUrl } from './apiFunctions';
import { List } from 'linq-collections';

export interface IArticlesContainerProps {
  direction: 'row' | 'column';
}

export default function ArticlesContainer({ direction }: IArticlesContainerProps) {
  //state
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'), { noSsr: true });
  const [err, setErr] = useState<Boolean>(false);
  const [pagination, setPagination] = useState<IPagination>();

  const [articles, setArticles] = useState<IArticle[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [, setNoSearchResults] = useState<boolean>(false);

  //pageNumber starts at 2 because first page is loaded by useffect
  const [pageNumber, setPageNumber] = useState<number>(2);
  const { categories } = useCategories();
  let { language, searchTerm, domain, order, daysSince2020First, topicId } = useParams<any>();

  //if language is not set
  language = language ?? localStorage.getItem('language') ?? 'all';

  // for fetch articles
  //--Could be custom hook!
  useEffect(() => {
    const fetchArts = async () => {
      const apiUrl = getApiUrl({
        pageNumber: 1,
        categories,
        daysSince2020First,
        domain,
        language,
        order,
        searchTerm,
        topicId,
      });
      try {
        const response = await fetch(apiUrl);
        let paginationHeaders = response.headers.get('X-Pagination')!;
        let paginationJson: IPagination = JSON.parse(paginationHeaders);
        setPagination(paginationJson);
        const newArticles = await response.json();

        setNoSearchResults(newArticles.length === 0 ? true : false);
        setArticles(newArticles);
        if (err === true) setErr(false);
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
  }, [language, domain, order, categories, searchTerm, daysSince2020First]);

  //when reaches end of page
  const loadMore = async () => {
    if (isLoading || !pagination?.HasNext) {
      return;
    }

    const apiUrl = getApiUrl({
      pageNumber,
      categories,
      daysSince2020First,
      domain,
      language,
      order,
      searchTerm,
      topicId,
    });
    const response = await fetch(apiUrl);
    let paginationHeaders = response.headers.get('X-Pagination')!;
    let paginationJson: IPagination = JSON.parse(paginationHeaders);
    setPagination(paginationJson);
    const arts = await response.json();
    const newArts = new List<IArticle>([...articles, ...arts])
      .distinct((a) => a.id)
      .toArray();

    setArticles(newArts);
    setPageNumber(pageNumber + 1);
    setIsLoading(false);
  };

  //replace selected text with a link to search that text
  const handleSelectDescriptionText = (articleId: number, selectedText?: string) => {
    if (!selectedText?.trim()) {
      return;
    }
    let article = articles.find((a) => a.id === articleId)!;
    let description = article.description.replace(
      RegExp(`${selectedText}`),
      `<a href="/portugalasmanchetes/#/${language}/search/${selectedText}" style="font-weight:bold;color:blue;text-decoration:underline">${selectedText}</a>`
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
          endMessage={
            <Alert
              style={{ marginTop: 18, maxWidth: direction === 'column' ? '100' : '83%' }}
              severity="info"
            >
              Não há mais artigos deste tipo
            </Alert>
          }
          next={loadMore}
          hasMore={isLoading || pagination === undefined || pagination?.HasNext}
          loader={null}
          style={{ overflow: 'hidden' }}
        >
          {!isLoading && searchTerm && articles.length > 0 && (
            <Alert
              icon={false}
              style={{ margin: '8px 0 16px 0', maxWidth: direction === 'column' ? '100' : '83%' }}
              severity="info"
            >
              Foram encontrados <b>{pagination?.TotalCount.toLocaleString()}</b> artigos com o texto
              <b> {searchTerm}</b> em <b>{translateIntoPortuguese(language)}</b>
            </Alert>
          )}

          {!isLoading && categories && (
            <Alert
              icon={false}
              style={{ margin: '8px 0 16px 0', maxWidth: direction === 'column' ? '100' : '83%' }}
              severity="info"
            >
              Há <b>{pagination?.TotalCount.toLocaleString()}</b> artigos em{' '}
              <b>{translateIntoPortuguese(language)}</b>
            </Alert>
          )}
          {!isLoading && domain && (
            <Alert
              icon={false}
              style={{ margin: '8px 0 16px 0', maxWidth: direction === 'column' ? '100' : '83%' }}
              severity="info"
            >
              Há <b>{pagination?.TotalCount.toLocaleString()}</b> artigos do site <b>{domain}</b>
            </Alert>
          )}
          <Grid container spacing={2}>
            {isLoading && <NewsLoader text="a carregar" fontSize={14} />}
            {!isLoading &&
              articles.map((article, i, arts) => {
                return (
                  <>
                    {i !== 0 && arts[i - 1].daysSince2020First !== article.daysSince2020First && (
                      <h2 style={{ width: '100%' }}>{article.friendlyDate}</h2>
                    )}
                    <Grid
                      item
                      key={article.id}
                      xs={12}
                      sm={direction === 'row' ? 12 : 6}
                      md={direction === 'row' ? 10 : 4}
                      lg={direction === 'row' ? 10 : 4}
                      style={{ maxWidth: '100vw !important' }}
                    >
                      <Article
                        direction={direction}
                        {...article}
                        onDescriptionTextSelected={handleSelectDescriptionText}
                      />
                    </Grid>
                  </>
                );
              })}
          </Grid>
        </InfiniteScroll>
      </Grid>
      {!isMobile && (
        <Grid item md={3}>
          <CategoriesList position="fixed" />
        </Grid>
      )}
    </Grid>
  );
}
