import { CSSProperties } from '@stitches/react';
import React, { ButtonHTMLAttributes } from 'react';
import { SpinnerLoader } from '../SpinnerLoader';
import { Container } from './styles';

interface ButtonBaseProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  textButton: string;
  loading?: boolean;
  styleButton?: CSSProperties;
};

export function Button({ textButton, loading, styleButton, ...rest }: ButtonBaseProps) {
  return (
    <Container
      {...rest}
    >
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