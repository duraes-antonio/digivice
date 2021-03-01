import React from 'react';
import { Digimon } from '../../models/digimon';
import style from './card.module.scss';

export const Card = (props: {
  digimon: Digimon;
  cbClick?: (d: Digimon) => void;
}): JSX.Element => (
  <div
    className={style.card}
    onClick={() => props.cbClick && props.cbClick(props.digimon)}
  >
    <div className={style.block__image}>
      <img
        className={style.img}
        src={props.digimon.imageUrl}
        alt={props.digimon.name}
      />
    </div>
    <span className={style.name}>{props.digimon.name}</span>
    <div className={style.attributes}>
      {props.digimon.attribute.map((attr, i) => (
        <span className={style.attributes__item} data-type={attr} key={i}>
          {attr}
        </span>
      ))}
    </div>
    <div className={style.type__level}>
      <span className={style.level} data-type={props.digimon.level}>
        {props.digimon.level}
      </span>
      <span className={style.type}>{props.digimon.type}</span>
    </div>
  </div>
);
