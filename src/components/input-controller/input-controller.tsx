import { Controller, UseControllerProps } from 'react-hook-form';

import { FormInput } from '../ui/form-input/index';

interface InputControllerProps extends UseControllerProps {
  placeholder: string;
}

function InputController({
  placeholder,
  control,
  name,
  rules,
}: InputControllerProps): JSX.Element {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      defaultValue
      render={({ field, fieldState }) => (
        <FormInput {...field} {...fieldState} placeholder={placeholder} />
      )}
    />
  );
}

export default InputController;
