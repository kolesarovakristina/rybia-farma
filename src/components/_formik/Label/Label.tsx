import { FC } from 'react';
import classnames from 'classnames';

import classes from './Label.module.scss';

type TLabelProps = {
  readonly labelTitle: string;
  readonly htmlFor: string;
  readonly isRequired?: boolean;
  readonly disabled?: boolean;
  readonly labelClassName?: string | null;
};

const Label: FC<TLabelProps> = ({
  labelTitle,
  htmlFor,
  isRequired,
  disabled,
  labelClassName = null,
}) => {
  return (
    <div
      className={classnames(classes.wrapper, {
        [labelClassName!]: labelClassName !== null,
      })}
    >
      {isRequired && !disabled ? (
        <span className={classes['wrapper__required-mark']}>&#42;</span>
      ) : null}
      <label htmlFor={htmlFor}>{labelTitle}</label>
    </div>
  );
};

export default Label;
