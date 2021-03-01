import React, { CSSProperties } from 'react';
import Link from 'next/link';
import style from './menu-item.module.scss';
import { HeaderLink } from '../../../models/headerLink';

const getItem = (l: HeaderLink) => {
  if (l.imgUrl) {
    return (
      <img src={l.imgUrl} alt="" style={{ width: 'auto', maxHeight: '24px' }} />
    );
  }
  return <i className={`fas fa-${l.iconName}`} style={{ fontSize: '18px' }} />;
};
const MenuItem = (props: { l: HeaderLink }): JSX.Element => {
  const { l: link } = props;
  const cssProps = {
    '--color-hover': link.color ?? 'currentColor',
  } as CSSProperties;
  return (
    <Link href={link.url}>
      <a className={style.link} style={cssProps} href={link.url}>
        {getItem(link)}
        {link.title}
      </a>
    </Link>
  );
};

export default MenuItem;
