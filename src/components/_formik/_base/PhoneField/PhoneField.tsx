import { useField } from 'formik';
import classnames from 'classnames';
import PhoneInput from 'react-phone-number-input';
import sk from 'react-phone-number-input/locale/sk.json';

import Label from 'components/_formik/Label';
import Error from '../Error';

import classes from './PhoneField.module.scss';

type TPhoneFieldProps = {
  readonly id: string;
  readonly labelTitle: string;
  readonly placeholder: string;
  readonly name: string;
  readonly isSubmissionExecuting: boolean;
  readonly isRequired?: boolean;
  readonly className?: string | null;
};

enum ECountries {
  SK = 'SK',
  PL = 'PL',
  HU = 'HU',
}

const PhoneField = ({
  id,
  isSubmissionExecuting,
  labelTitle,
  isRequired,
  className = null,
  ...props
}: TPhoneFieldProps) => {
  const [field, meta, helpers] = useField('mobilePhone');

  const value = field.value ?? '';
  const isErrorVisible = Boolean(
    meta.touched && meta.error && !isSubmissionExecuting
  );

  return (
    <div
      className={classnames(classes.wrapper, {
        [className!]: className !== null,
      })}
    >
      <Label isRequired={isRequired} htmlFor={id} labelTitle={labelTitle} />
      <PhoneInput
        {...props}
        {...field}
        id={id}
        value={value}
        defaultCountry={ECountries.SK}
        countries={[ECountries.SK, ECountries.HU, ECountries.PL]}
        onChange={value => {
          helpers.setValue(value ?? '');
        }}
        onBlur={event => {
          if (!event.currentTarget.contains(event.relatedTarget)) {
            field.value === '' && !isRequired
              ? helpers.setTouched(false)
              : helpers.setTouched(true);
          }
        }}
        addInternationalOption={false}
        labels={sk}
      />

      <Error isErrorVisible={isErrorVisible} message={meta.error!} />
    </div>
  );
};

export default PhoneField;
