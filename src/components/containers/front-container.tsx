import React, { useState, useEffect } from 'react';
import { IArticle } from 'models/IArticle';
import { Avatar, Grid, ListItem, ListItemIcon, ListItemText, List } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

import Article from 'components/article/article';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import NewsLoader from 'components/loader/loader';
import { Link, useParams } from 'react-router-dom';
import InfiniteScroll from 'components/infinite-scroll/infinite-scroll';
import { IPagination } from 'models/IPagination';
import { useCategories } from 'context/settings-context';
import { getApiUrl } from './apiFunctions';
import { List as IEnumerable } from 'linq-collections';
import { IDailyTopic } from 'models/IDailyTopic';

export interface IFrontContainerProps {
  direction: 'row' | 'column';
}
const pageSize = 5;
const baseUrl = `https://pokopek.com/api/dailytopics`;
export default function FrontContainer({ direction }: IFrontContainerProps) {
  //state
  const [err, setErr] = useState<Boolean>(false);
  const [pagination, setPagination] = useState<IPagination>();

  const [dailyTopics, setDailyTopics] = useState<IDailyTopic[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  //pageNumber starts at 2 because first page is loaded by useffect
  const [pageNumber, setPageNumber] = useState<number>(2);
  const { categories } = useCategories();
  let { language, daysSince2020First } = useParams<any>();

  //if language is not set
  language = language ?? localStorage.getItem('language') ?? 'all';

  // for fetch articles
  //--Could be custom hook!
  useEffect(() => {
    const fetchTopics = async () => {
      var apiUrl = getApiUrl({
        baseUrl,
        pageNumber: 1,
        pageSize,
        categories,
        daysSince2020First,
        language,
      });
      try {
        const response = await fetch(apiUrl);
        let paginationHeaders = response.headers.get('X-Pagination')!;
        let paginationJson: IPagination = JSON.parse(paginationHeaders);
        setPagination(paginationJson);
        const newTopics = await response.json();

        setDailyTopics(newTopics);
        if (err === true) setErr(false);
      } catch {
        setErr(true);
      }
    };

    setIsLoading(true);
    fetchTopics();
    setIsLoading(false);

    //2 (two), because the first page has been got here, and the infinite scroll should take the second page
    setPageNumber(2);
  }, [language, categories, daysSince2020First]);

  //-- LOAD MORE when reaches end of page
  const loadMore = async () => {
    if (isLoading || !pagination?.HasNext) {
      return;
    }

    var apiUrl = getApiUrl({
      baseUrl,
      pageNumber,
      pageSize,
      categories,
      daysSince2020First,
      language,
    });

    const response = await fetch(apiUrl);
    let paginationHeaders = response.headers.get('X-Pagination')!;
    let paginationJson: IPagination = JSON.parse(paginationHeaders);
    setPagination(paginationJson);
    const topics = await response.json();
    const mergedTopics = new IEnumerable<IDailyTopic>([...dailyTopics, ...topics])
      .distinct((a) => a.id)
      .toArray();

    setDailyTopics(mergedTopics);
    setPageNumber(pageNumber + 1);
  };

  //--RENDER

  return (
    <Grid container>
      {err && (
        <Alert severity="error">
          Pedimos desculpas. Neste momento, o site está a implementar algumas mudanças. Volte mais
          tarde
        </Alert>
      )}
      <Grid item md={8}>
        <InfiniteScroll
          dataLength={dailyTopics.length}
          endMessage={
            <Alert
              style={{ marginTop: 18, maxWidth: direction === 'column' ? '100' : '83%' }}
              severity="info"
            >
              Não há mais destaques por hoje.
            </Alert>
          }
          next={loadMore}
          hasMore={isLoading || pagination === undefined || pagination?.HasNext}
          loader={null}
          style={{ overflow: 'hidden' }}
        >
          <Grid container spacing={2}>
            {isLoading && <NewsLoader text="a carregar" fontSize={14} />}
            {!isLoading &&
              dailyTopics.map((topic: IDailyTopic) => {
                return (
                  <Grid
                    item
                    container
                    key={topic.id}
                    className="daily-topic"
                    style={{ marginBottom: 24 }}
                  >
                    <Grid item xs={12} spacing={0}>
                      <Alert severity="info" icon={false} style={{ margin: 8 }}>
                        <b>Temas:</b>
                        {topic.tagsText
                          .split(' | ')
                          .slice(0, 3)
                          .map((tag) => (
                            <Link to={`/${language}/search/${tag}`}>
                              <span
                                key={tag}
                                style={{
                                  marginLeft: 12,

                                  maxWidth: 250,
                                  fontSize: '.84rem',
                                  padding: '2px 4px',
                                  color: 'rgb(8 111 193)',
                                  borderRadius: '2em',
                                }}
                              >
                                {tag}
                              </span>
                            </Link>
                          ))}
                      </Alert>
                    </Grid>

                    <Grid item container key={topic.id} spacing={3}>
                      <Grid item xs={12} md={10}>
                        <Article direction="row" {...topic.mainArticle} />
                      </Grid>

                      <Grid item xs={12} md={10}>
                        {ArticlesList(topic, language)}
                      </Grid>
                    </Grid>
                  </Grid>
                );
              })}
          </Grid>
        </InfiniteScroll>
      </Grid>
    </Grid>
  );
}

function ArticlesList(topic: IDailyTopic, language: any) {
  return (
    <List>
      {topic.articles
        .filter((a) => a.id !== topic.mainArticle.id)
        .sort((a, b) => b.id - a.id)
        .slice(0, 4)
        .map((art: IArticle) => (
          <ListItem
            key={art.id}
            button
            style={{ padding: 4 }}
            component={(props) => <Link to={`/${language}/topic/${topic.id}`} {...props} />}
          >
            <ListItemIcon>
              <Avatar src={`${art.favicon}`} style={{ width: 30, height: 30 }} />
            </ListItemIcon>
            <ListItemText primary={art.title}></ListItemText>
          </ListItem>
        ))}
    </List>
  );
}
