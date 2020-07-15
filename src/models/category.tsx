import { useTheme } from '@material-ui/core';
import {
  red,
  yellow,
  green,
  blue,
  orange,
  grey,
  brown,
  pink,
} from '@material-ui/core/colors';

export enum Category {
  actualidade = 0,
  desporto = 1,
  cultura = 2,
  ciência = 3,
  história = 4,
  religião = 5,
  diversão = 6,
  tecnologia = 7,
  tempo = 8,
}

interface ICategoryColor {
  backgroundColor: string;
  color: string;
}

export const CategoryColor: { [key: number]: ICategoryColor } = {
  0: { backgroundColor: red[800], color: 'white' },
  1: { backgroundColor: brown[800], color: 'black' },
  2: { backgroundColor: green[800], color: 'white' },
  3: { backgroundColor: blue[800], color: 'white' },
  4: { backgroundColor: orange[900], color: 'white' },
  5: { backgroundColor: grey[500], color: 'white' },
  6: { backgroundColor: brown[500], color: 'white' },
  7: { backgroundColor: pink[400], color: 'white' },
  8: { backgroundColor: green[500], color: 'white' },
};
