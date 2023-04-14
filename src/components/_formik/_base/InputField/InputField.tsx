import { Input } from 'antd';

import Error from '../Error';

import type { TInputField } from 'types/Field';

const InputField = ({
  value,
  form: { touched, errors },
  field,
  ...props
}: TInputField) => {
  const isErrorVisible = Boolean(touched[field.name] && errors[field.name]);

  return (
    <>
      <Input
        value={value}
        {...field}
        {...props}
        status={isErrorVisible ? 'error' : ''}
      />
      <Error isErrorVisible={isErrorVisible} message={errors[field.name]} />
    </>
  );
};

export default InputField;
