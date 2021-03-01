import React from 'react';
import { useRouter } from 'next/router';
import { GetDigimons } from '../api/hello';
import style from './general.module.scss';

const Id = (): JSX.Element => {
  const router = useRouter();
  const digimonId = +router.query.id;
  const dig = GetDigimons().find(d => d.id === digimonId);
  return (
    <div id={'magic'} className={style.magic}>
      {/*Informações (TABELA)*/}
      <div className={style.digimon}>
        <div className={style.digimon__img}>
          <img
            src={dig.imageUrl}
            style={{ height: '150px', width: 'auto', borderRadius: '50%' }}
            alt={dig.name}
          />
        </div>
        <div className={style.digimon__info}>Outro teste</div>
      </div>

      {/* Outras formas (EVOLUÇOES) */}
      <div className={style.evolutions}>teste</div>
    </div>
  );
};

export default Id;
