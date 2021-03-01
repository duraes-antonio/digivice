import { Attribute, Digimon, Level } from '../../models/digimon';

const buildDigimon = (
  name: string,
  imageUrl: string,
  level: Level,
  type: string,
  attributes: Attribute[],
  id?: number,
): Digimon => ({
  name,
  imageUrl,
  level,
  type,
  attribute: attributes,
  id,
});

export const GetDigimons = (): Digimon[] => {
  let id = 0;
  return [
    buildDigimon(
      'Aegiochusmon',
      'https://static.wikia.nocookie.net/digimon/images/8/8f/Aegiochusmon_b.jpg',
      Level.ULTIMATE,
      'God Man',
      [Attribute.VACCINE],
      ++id,
    ),
    buildDigimon(
      'Aegiomon',
      'https://static.wikia.nocookie.net/digimon/images/7/78/Aegiomon_b.jpg',
      Level.CHAMPION,
      'God Man',
      [Attribute.VACCINE],
      ++id,
    ),
    buildDigimon(
      'Agumon',
      'https://static.wikia.nocookie.net/digimon/images/6/68/Agumon_b.jpg',
      Level.ROOKIE,
      'Reptile',
      [Attribute.VACCINE, Attribute.VIRUS],
      ++id,
    ),
    buildDigimon(
      'Gabumon',
      'https://static.wikia.nocookie.net/digimon/images/d/d1/Gabumon_b.jpg',
      Level.ROOKIE,
      'Reptile',
      [Attribute.VACCINE, Attribute.VIRUS, Attribute.DATA],
      ++id,
    ),
  ];
};
