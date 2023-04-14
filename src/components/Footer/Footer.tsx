import { FC } from 'react';
import { Image } from 'antd';

import InstagramLogo from 'images/logo/instagram-logo.png';

import classes from './Footer.module.scss';

const Footer: FC = () => (
  <footer className={classes.footer}>
    <a
      href="https://www.instagram.com/rybiafarma_s.r.o"
      target="_blank"
      rel="noreferrer"
      className={classes.footer__icon}
    >
      <Image
        preview={false}
        src={InstagramLogo}
        width={20}
        height={20}
        alt="instagram-logo"
      />
    </a>
    <div className={classes.footer__content}>
      <div>
        &#169; 2022
        <a href="https://rybia-farma.sk" className={classes.footer__title}>
          &#160;Rybia farma s.r.o.&#44;&#160;
        </a>
      </div>
      <div>Všetky práva vyhradené.</div>
    </div>
  </footer>
);

export default Footer;
