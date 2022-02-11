import React from 'react';
import { About } from '../About';
import { Experience } from '../Experience';
import { Projects } from '../Projects';
import { Footer } from '../Footer';

import { ContainerCenter } from './styles';

export function Home() {
  return (
    <React.Fragment>
      <title>in Dev...</title>
      <ContainerCenter style={{ background: '#0b0b14' }}>
        <About />
      </ContainerCenter>
      <ContainerCenter style={{ background: '#1c1b2d' }}>
        <Experience />
      </ContainerCenter>
      <ContainerCenter style={{ background: '#0b0b14' }}>
        <Projects />
      </ContainerCenter>
      <Footer />
    </React.Fragment>
  );
}