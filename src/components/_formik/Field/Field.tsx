import { FC } from 'react';
import { Field as FormikField, FormikErrors, FormikTouched } from 'formik';
import classnames from 'classnames';

import InputField from '../_base/InputField';
import Label from '../Label';

import { getValidate } from './validate';

import type { TInputField, TValidate } from 'types/Field';

import classes from './Field.module.scss';

type TFieldProps = {
  readonly labelTitle: string;
  readonly name: string;
  readonly id: string;
  readonly validate?: TValidate;
  readonly component?: ({ value, form, field }: TInputField) => JSX.Element;
  readonly placeholder?: string;
  readonly disabled?: boolean;
  readonly labelClassName?: string;
  readonly errors?: FormikErrors<{
    firstName: string;
    lastName: string;
    email: string;
    mobilePhone: string;
    message: string;
  }>;
  readonly touched?: FormikTouched<{
    firstName: string;
    lastName: string;
    email: string;
    mobilePhone: string;
    message: string;
  }>;
  readonly className?: string;
};

const Field: FC<TFieldProps> = ({
  id,
  name,
  labelTitle,
  validate,
  component,
  disabled,
  placeholder,
  labelClassName,
  errors,
  touched,
  className = null,
  ...props
}) => {
  const isRequired = Boolean(validate);

  return (
    <div
      className={classnames(classes.wrapper, {
        [className!]: className !== null,
      })}
    >
      <Label
        labelTitle={labelTitle}
        htmlFor={name}
        disabled={disabled}
        isRequired={isRequired}
        labelClassName={labelClassName}
      />
      <FormikField
        className={classes.wrapper__field}
        id={id}
        component={component ?? InputField}
        disabled={disabled}
        name={name}
        placeholder={placeholder}
        required={isRequired}
        validate={isRequired ? getValidate(labelTitle, validate) : () => {}}
        {...props}
      />
    </div>
  );
};

export default Field;
