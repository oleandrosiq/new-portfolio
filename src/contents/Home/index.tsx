import React from 'react';
import { Experience } from '../Experience';
import { About } from '../About';
import { Footer } from '../Footer';

import { ContainerCenter } from './styles';

export function Home() {
  return (
    <React.Fragment>
      <ContainerCenter>
        <About />
        <Experience />
      </ContainerCenter>
      <Footer />
    </React.Fragment>
  );
}