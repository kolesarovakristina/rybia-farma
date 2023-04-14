import { FC } from 'react';
import { Link } from 'react-router-dom';

import logo from 'images/logo/home-logo.png';

import Navbar from 'components/Navbar';
import Image from 'components/Image';

import classes from './Header.module.scss';

const Header: FC = () => (
  <div className={classes.wrapper}>
    <Link to="/">
      <Image
        className={classes.wrapper__logo}
        preview={false}
        width={115}
        height={110}
        src={logo}
        alt="main-logo"
      />
    </Link>
    <div className={classes['wrapper__right-content']}>
      <Navbar />
    </div>
  </div>
);

export default Header;
