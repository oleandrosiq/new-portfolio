import { forwardRef, InputHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

import { Container } from './styles';

interface InputBaseProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError;
}

function InputBase({ placeholder = '', error, ...rest }: InputBaseProps, ref) {
  return (
    <Container 
      {...rest}
      ref={ref}
      variant={!!error ? 'error' : null}
      placeholder={!!error ? error.message : placeholder}
    />
  );
}

export const Input = forwardRef<HTMLInputElement, InputBaseProps>(InputBase);