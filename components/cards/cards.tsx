import { Digimon } from '../../models/digimon';
import React from 'react';
import { Card } from '../card/card';
import style from './cards.module.scss';
import Link from 'next/link';

export const Cards = (props: {
  digimons: Digimon[];
  cbClick?: (d: Digimon) => void;
}): JSX.Element => {
  return (
    <div className={style.cards}>
      {props.digimons.map((dig, i) => (
        <Link href={`/digimon/${dig.id}`} key={i}>
          <a>
            <Card digimon={dig} cbClick={props.cbClick} />
          </a>
        </Link>
      ))}
    </div>
  );
};
