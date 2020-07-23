import { Category } from './category';

export interface IArticle {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  imageTitle: string;
  friendlyDate: string;
  url: string;
  domain: string;
  fullText: string;
  ranking: number;
  category: number;
  tags: string[];
  daysSince2020First: number;
  clicks: number;
}
