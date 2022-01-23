import React, { HTMLAttributes } from 'react';
import { SpinnerLoader } from '../SpinnerLoader';
import { Container } from './styles';

interface ButtonBaseProps extends HTMLAttributes<HTMLButtonElement> {
  textButton: string;
  loading?: boolean;
};

export function Button({ textButton, loading }: ButtonBaseProps) {
  return (
    <Container>
      { loading ? (
        <React.Fragment>
          <SpinnerLoader width={25} height={25} loading />
        </React.Fragment>
      ) : (
        <React.Fragment>
          {textButton}
        </React.Fragment>
      )}
    </Container>
  );
}