import React from 'react';
import { Experience } from '../Experience';
import { Footer } from '../Footer';

import { ContainerCenter } from './styles';

export function Home() {
  return (
    <React.Fragment>
      <ContainerCenter>
        <Experience />
      </ContainerCenter>
      <Footer />
    </React.Fragment>
  );
}