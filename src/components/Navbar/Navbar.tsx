import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { useMediaQuery } from 'hooks/useMediaQuery';

import {
  AiOutlineContainer,
  AiOutlineHome,
  AiOutlinePhone,
  AiOutlineCalendar,
} from 'react-icons/ai';

import classnames from 'classnames';

import Badge from 'components/Badge/ShoppingCardBadge';
import classes from './Navbar.module.scss';

const Navbar: FC = () => {
  const isMobileView = useMediaQuery('(max-width: 736px)');

  const links = [
    { id: 1, to: '/', name: 'Domov', icon: <AiOutlineHome size={20} /> },
    {
      id: 2,
      to: 'products',
      name: 'Produkty',
      icon: <AiOutlineContainer size={20} />,
    },
    {
      id: 3,
      to: 'opening-hours',
      name: 'Otváracie hodiny',
      icon: <AiOutlineCalendar size={20} />,
    },
    {
      id: 4,
      to: 'contact-us',
      name: 'Kontakt',
      icon: <AiOutlinePhone size={20} />,
    },
  ];

  return (
    <>
      <nav className={classes.navigation}>
        {links.map(({ id, to, name, icon }) => (
          <NavLink
            key={id}
            className={({ isActive }) =>
              classnames(classes.link, {
                [classes.link__active]: isActive,
              })
            }
            to={to}
          >
            {isMobileView ? icon : name}
          </NavLink>
        ))}
        <Badge />
      </nav>
    </>
  );
};

export default Navbar;
