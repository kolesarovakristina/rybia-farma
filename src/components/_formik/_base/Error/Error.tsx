import { FC } from 'react';

import classes from './Error.module.scss';

type TErrorProps = {
  readonly message: string;
  readonly isErrorVisible: boolean;
};

const Error: FC<TErrorProps> = ({ message, isErrorVisible }) => {
  if (!isErrorVisible) {
    return null;
  }

  return <div className={classes.wrapper}>{message}</div>;
};

export default Error;
