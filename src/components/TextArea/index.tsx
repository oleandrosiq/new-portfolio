import { forwardRef, InputHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

import { Container } from './styles';

interface TextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  error?: FieldError;
}

function TextAreaBase({ placeholder, error, ...rest }: TextAreaProps, ref) {
  return (
    <Container 
      ref={ref}
      {...rest}
      variant={!!error ? 'error' : null}
      placeholder={!!error ? error.message : placeholder}
    />
  );
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(TextAreaBase);