import React, { useRef } from 'react';

import { Landing } from '../Landing';
import { About } from '../About';
import { Experience } from '../Experience';
import { Projects } from '../Projects';
import { Footer } from '../Footer';

import { ContainerCenter } from './styles';

export type ElementsProps = 'about' | 'experience' | 'projects' | 'contact';

export function Home() {
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  function scrollToView(element: ElementsProps) {
    const refs = {
      about: aboutRef,
      experience: experienceRef,
      projects: projectsRef,
      contact: contactRef,
    };

    refs[element]?.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <React.Fragment>
      <title>in Dev...</title>
      <Landing scrollToView={scrollToView} />
      
      <ContainerCenter style={{ background: '#0b0b14' }}>
        <About ref={aboutRef} />
      </ContainerCenter>

      <ContainerCenter style={{ background: '#1c1b2d' }}>
        <Experience ref={experienceRef} />
      </ContainerCenter>

      <ContainerCenter style={{ background: '#0b0b14' }}>
        <Projects ref={projectsRef} />
      </ContainerCenter>
      <Footer ref={contactRef} />
    </React.Fragment>
  );
}