import { IApiParameters } from 'models/IApiParameters';

export const getApiUrl = ({
  pageNumber,
  language,
  domain,
  searchTerm,
  daysSince2020First,
  categories,
  order,
  topicId,
}: IApiParameters): string => {
  // if topic id exists, then return articles topic
  if (topicId) return `https://pokopek.com/api/articles/topic?id=${topicId}`;

  //if no topic id, there is a normal fetch to
  const baseUrl = `https://pokopek.com/api/articles?pagenumber=${pageNumber}`;
  const parts: string[] = [];

  if (categories) {
    parts.push(`categories=${categories.join(',')}`);
  }

  if (language && language !== 'all' && domain === undefined) {
    parts.push(`language=${language}`);
  }
  if (domain) {
    parts.push(`domain=${domain}`);
  }

  if (searchTerm) {
    parts.push(`searchterm=${searchTerm}`);
  }

  if (daysSince2020First && !domain) {
    parts.push(`dayssince2020first=${daysSince2020First}`);
  }

  if (order) {
    parts.push(`order=${order}`);
  }

  const query = parts?.join('&');
  const final = baseUrl + '&' + query;
  return final;
};
