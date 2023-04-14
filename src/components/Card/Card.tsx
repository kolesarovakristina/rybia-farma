import React, { FC } from 'react';

import classes from './Card.module.scss';

type TCardProps = {
  readonly icon: JSX.Element;
  readonly title: string;
  readonly description: JSX.Element;
};

const Card: FC<TCardProps> = ({ icon, title, description }) => {
  return (
    <div className={classes.card}>
      <div>{icon}</div>
      <div className={classes.card__title}>{title}</div>
      <div className={classes.card__description}>{description}</div>
    </div>
  );
};

export default Card;
