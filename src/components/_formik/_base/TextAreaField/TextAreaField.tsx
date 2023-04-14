import { Input } from 'antd';

import Error from '../Error';

import { TInputField } from 'types/Field';

const TextAreaField = ({
  value,
  form: { touched, errors },
  field,
  ...props
}: TInputField) => {
  const isErrorVisible = Boolean(touched[field.name] && errors[field.name]);

  return (
    <>
      <Input.TextArea
        value={value}
        maxLength={400}
        showCount
        autoSize={{ minRows: 2 }}
        status={isErrorVisible ? 'error' : ''}
        {...field}
        {...props}
      />
      <Error isErrorVisible={isErrorVisible} message={errors[field.name]} />
    </>
  );
};

export default TextAreaField;
