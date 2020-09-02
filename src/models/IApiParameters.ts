import { TwoLetterLanguage } from './types';

export interface IApiParameters {
  pageNumber?: number;

  pageSize?: number;
  language?: TwoLetterLanguage;
  domain?: string;
  searchTerm?: string;
  daysSince2020First?: number;
  categories?: number[];
  order?: 'relevant' | 'new';

  id?: number;
  baseUrl?: string;
}
