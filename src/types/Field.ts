// https://formik.org/docs/api/formik#setfielderror-field-string-errormsg-string--void

type TForm = {
  readonly touched: { [field: string]: boolean };
  readonly errors: { [field: string]: string };
};

type TField = {
  readonly name: string;
};

export type TInputField = {
  readonly value?: string | number | Array<string>;
  readonly form: TForm;
  readonly field: TField;
};

export type TValidate = {
  readonly required?: boolean;
  readonly validEmail?: boolean;
  readonly validFileName?: boolean;
  readonly validMomentDate?: boolean;
  readonly validNumber?: boolean;
  readonly validString?: boolean;
  readonly validVariableName?: boolean;
  readonly maxLength?: number;
  readonly minLength?: number;
  readonly max?: boolean;
  readonly min?: boolean;
  readonly matchValue?: boolean;
  readonly validNumberPhone?: boolean;
};
