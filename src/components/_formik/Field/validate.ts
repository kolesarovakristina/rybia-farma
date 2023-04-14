import {
  atLeast,
  atMost,
  matchEmail,
  matchNumeric,
  required,
  TFieldValue,
  validNumberPhone,
} from 'components/_formik/validation';
import { TValidate } from 'types/Field';

export const getValidate =
  (label: string, validationRules?: TValidate) => (value: string) => {
    if (validationRules?.required && required(value as TFieldValue)) {
      return 'Toto pole je potrebné vyplniť!';
    }

    if (
      validationRules?.maxLength &&
      atMost(validationRules?.maxLength, value as { length: number })
    ) {
      return `Pole ${label} je príliš dlhé`;
    }

    if (
      validationRules?.minLength &&
      atLeast(validationRules?.minLength, value as { length: number })
    ) {
      return `Pole ${label} je príliš krátke`;
    }

    if (validationRules?.validEmail && matchEmail(value)) {
      return `${label} musí mať správny formát`;
    }

    if (validationRules?.validNumber && matchNumeric(value)) {
      return `${label} musí obsahovať len čísla`;
    }

    if (validationRules?.validNumberPhone && validNumberPhone(value)) {
      return 'Zadajte prosím platné číslo';
    }

    return undefined;
  };
