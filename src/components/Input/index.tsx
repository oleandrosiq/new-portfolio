import { forwardRef, HTMLAttributes } from 'react';
import { Container } from './styles';

interface InputBaseProps extends HTMLAttributes<HTMLInputElement> {

}

function InputBase({ ...rest }: InputBaseProps, ref) {
  return (
    <Container 
      ref={ref}
      {...rest}
    >

    </Container>
  );
}

export const Input = forwardRef<'', InputBaseProps>(InputBase);