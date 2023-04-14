import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import classes from './Home.module.scss';

const Home: FC = () => (
  <div className={classes.wrapper}>
    <div className={classes.content}>
      <h1 className={classes.content__title}>Čerstvé ryby po celý rok!</h1>
      <h2 className={classes.content__description}>
        Sme moderná firma zaoberajúca sa chovom a predajom rýb. Ponúkame Vám na
        predaj rôzne druhy rýb. Viac informácií Vám poskytneme v&#160;
        <Link to="products" className={classes.content__link}>
          aktuálnej ponuke.
        </Link>
      </h2>
    </div>
  </div>
);

export default Home;
