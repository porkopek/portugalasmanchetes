import { TwoLetterLanguage } from './types';
import { IArticle } from './IArticle';

export interface IDailyTopic {
  id: number;
  mainArticle: IArticle;
  articles: IArticle[];

  tagsText: string;
  category: number;
  language: TwoLetterLanguage;
  count: number;
  daysSince2020First: number;
}
