import React from 'react';
import { HeaderLink } from '../../../models/headerLink';
import MenuItem from '../menu-item/menu-item';
import style from './header.module.scss';

const links: HeaderLink[] = [
  {
    title: 'Home',
    url: '/',
    imgUrl: 'agumon.png',
    color: '#ffcb1f',
  },
  {
    title: 'Random',
    url: '/digimon/2',
    iconName: 'random',
    color: 'dodgerblue',
  },
  {
    title: 'Card Game',
    url: '/card',
    iconName: 'dice',
    color: 'red',
  },
  {
    title: 'Buy me a Coffe',
    url: '/support',
    iconName: 'coffee',
    color: 'brown',
  },
];

const Header = (): JSX.Element => (
  <div className={style.header}>
    <div className={style.header__logo}>
      <img src="logo.png" alt="" />
    </div>
    <div className={style.links}>
      {links.map((l, k) => (
        <MenuItem key={k} l={l} />
      ))}
    </div>
  </div>
);

export default Header;
