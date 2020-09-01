import { TwoLetterLanguage } from './types';
import { IArticle } from './IArticle';

export interface ITrend {
  id: number;
  mainTitle: string;
  articlesIds: number[];

  tagsText: string;
  category: number;
  language: TwoLetterLanguage;
  count: number;
  favicon: string;
}
