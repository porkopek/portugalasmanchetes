import { IApiParameters } from 'models/IApiParameters';

export const getApiUrl = ({
  baseUrl,
  pageNumber,
  pageSize,
  language,
  domain,
  searchTerm,
  daysSince2020First,
  categories,
  order,
  id,
}: IApiParameters): string => {
  const parts: string[] = [];

  if (categories) {
    parts.push(`categories=${categories.join(',')}`);
  }
  if (pageNumber) {
    parts.push(`pageNumber=${pageNumber}`);
  }

  if (pageSize) {
    parts.push(`pageSize=${pageSize}`);
  }

  if (language && language !== 'all' && domain === undefined) {
    parts.push(`language=${language}`);
  }
  if (domain) {
    parts.push(`domain=${domain}`);
  }

  if (searchTerm) {
    parts.push(`search=${searchTerm}`);
  }

  if (daysSince2020First && !domain) {
    parts.push(`dayssince2020first=${daysSince2020First}`);
  }

  if (id) {
    parts.push(`id=${id}`);
  }

  if (order) {
    parts.push(`order=${order}`);
  }

  const query = parts?.join('&');
  const final = baseUrl + '?' + query;
  return final;
};
