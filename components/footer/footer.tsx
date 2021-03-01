import React from 'react';
import style from './footer.module.scss';

export const Footer = (): JSX.Element => (
  <div className={style.footer}>
    <span>
      Powered by <a href="">@gseis</a>
    </span>
  </div>
);
