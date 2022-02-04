import { forwardRef } from 'react';
import { FieldError } from 'react-hook-form';
import { Props as PropsInputMask } from 'react-input-mask';
 
import { Input } from './styles';

interface InputMaskProps extends PropsInputMask {
  error?: FieldError;
};

const InputMaskBase = ({ placeholder = '', error, ...rest }: InputMaskProps, ref) => {
  return (
    <Input 
      ref={ref}
      {...rest}
      variant={!!error ? 'error' : null}
      placeholder={!!error ? error.message : placeholder}
    />
  );
};

export const InputMask = forwardRef(InputMaskBase);