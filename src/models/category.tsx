import { red, green, blue, orange, grey, brown, pink } from '@material-ui/core/colors';

export const Category: { [key: number]: { portuguese: string; english: string } } = {
  0: { portuguese: 'actualidade', english: 'news' },
  1: { portuguese: 'desporto', english: 'sports' },
  2: { portuguese: 'cultura', english: 'culture' },
  3: { portuguese: 'ciência', english: 'science' },
  4: { portuguese: 'história', english: 'history' },
  5: { portuguese: 'religião', english: 'religion' },
  6: { portuguese: 'diversão', english: 'fun' },
  7: { portuguese: 'tecnologia', english: 'tech' },
  8: { portuguese: 'tempo', english: 'weather' },
};

interface ICategoryColor {
  backgroundColor: string;
  color: string;
}

export const CategoryColor: { [key: number]: ICategoryColor } = {
  0: { backgroundColor: '#ff1744', color: 'white' },
  1: { backgroundColor: '#3d5afe', color: 'white' },
  2: { backgroundColor: '#009688', color: 'white' },
  3: { backgroundColor: '#b26a00', color: 'white' },
  4: { backgroundColor: '#618833', color: 'white' },
  5: { backgroundColor: '#6d1b7b', color: 'white' },
  6: { backgroundColor: '#e91e63', color: 'white' },
  7: { backgroundColor: '#2a3eb1', color: 'white' },
  8: { backgroundColor: '#00a152', color: 'white' },
};
