import { Attribute } from './digimon';
import { Level } from 'chalk';

export class FilterInput {
  level?: Level;
  attributes?: Attribute[] = [];
  name?: string;
  sortBy?: SortOptions;
}

export enum SortOptions {
  NAME_ASC,
  NAME_DESC,
}
