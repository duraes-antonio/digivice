export interface Digimon {
  attribute: Attribute[];
  id?: number;
  imageUrl: string;
  level: Level;
  name: string;
  type: string;
}

export enum Attribute {
  DATA = 'Data',
  FREE = 'Free',
  VACCINE = 'Vaccine',
  VARIABLE = 'Variable',
  VIRUS = 'Virus',
}

export enum Level {
  BABY_1 = 'Baby I',
  BABY_2 = 'Baby II',
  CHAMPION = 'Champion',
  MEGA = 'Mega',
  ROOKIE = 'Rookie',
  ULTIMATE = 'Ultimate',
}

export enum Type {
  DATA = 'Data',
  FREE = 'Free',
  VACCINE = 'Vaccine',
  VARIABLE = 'Variable',
  VIRUS = 'Virus',
}
