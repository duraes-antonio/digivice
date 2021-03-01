import style from './menu-item.module.scss';
import React, { CSSProperties } from 'react';
import { HeaderLink } from '../../../models/headerLink';
import Link from 'next/link';

const getItem = (l: HeaderLink) => {
  if (l.imgUrl) {
    return (
      <img src={l.imgUrl} alt="" style={{ width: 'auto', maxHeight: '24px' }} />
    );
  }
  return <i className={`fas fa-${l.iconName}`} style={{ fontSize: '18px' }} />;
};
export const MenuItem = (props: { l: HeaderLink }): JSX.Element => {
  const cssProps = {
    '--color-hover': props.l.color ?? 'currentColor',
  } as CSSProperties;
  return (
    <Link href={props.l.url}>
      <a className={style.link} style={cssProps}>
        {getItem(props.l)}
        {props.l.title}
      </a>
    </Link>
  );
};
