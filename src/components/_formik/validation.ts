import curry from 'lodash/curry';
import isArray from 'lodash/isArray';
import isString from 'lodash/isString';
import isEmpty from 'lodash/isEmpty';
import isObject from 'lodash/isObject';
import { isValidPhoneNumber } from 'react-phone-number-input';

export type TFieldValue = [] | string | object | null | undefined;

const required = (fieldValue: TFieldValue) => {
  if (fieldValue === undefined || fieldValue === null) return true;

  if (isString(fieldValue) && fieldValue.trim() === '') return true;

  if (isArray(fieldValue)) return fieldValue.length === 0;

  if (isObject(fieldValue)) return isEmpty(fieldValue);

  return false;
};

const atMost = (maxLength: number, fieldValue: { length: number }) =>
  fieldValue.length > maxLength;

const atLeast = (minLength: number, fieldValue: { length: number }) =>
  fieldValue.length < minLength;

const matches = curry(
  (regex: RegExp, fieldValue: string) => regex.test(fieldValue) === false
);

const matchNumeric = matches(/^[0-9 +-]*$/);
const matchEmail = matches(/^\S+@\S+\.\S+$/);

const validNumberPhone = (number: string) => isValidPhoneNumber(number);

export {
  required,
  atLeast,
  atMost,
  matchEmail,
  matchNumeric,
  matches,
  validNumberPhone,
};
