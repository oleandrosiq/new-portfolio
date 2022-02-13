import Link from 'next/link';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { ElementsProps } from '../Home';

import { 
  Container,
  Header,
  Content,
  Wrapper,
  Buttons,
  Menu,
  ContentMenu,
} from './styles';

interface LandingProps {
  scrollToView: (element: ElementsProps) => void;
}

export function Landing({ scrollToView }: LandingProps) {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <Container> 
      <Header>
        <h1 onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }}>LS</h1>

        <nav>
          <ul>
            <li>
              <a onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
              Início
              </a>
            </li>
            <li>
              <a onClick={() => scrollToView('about')}>Sobre</a>
            </li>
            <li>
              <a onClick={() => scrollToView('experience')}>Experiência</a>
            </li>
            <li>
              <a onClick={() => scrollToView('projects')}>Projetos</a>
            </li>
          </ul>
        </nav>
        
        <button type='button' onClick={() => setMenuOpen(true)}>
          <FiMenu size={30} color='var(--white)' />
        </button>

        { menuOpen && (
          <Menu>
            <button type='button' onClick={() => setMenuOpen(false)}>
              <FiX size={30} color='var(--white)' />
            </button>

            <ContentMenu>
              <nav>
                <ul>
                  <li>
                    <a onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                      Início
                    </a>
                  </li>
                  <li>
                    <a onClick={() => {
                      scrollToView('about');
                      setMenuOpen(false);
                    }}>Sobre</a>
                  </li>
                  <li>
                    <a onClick={() => {
                      scrollToView('experience');
                      setMenuOpen(false);
                    }}>Experiência</a>
                  </li>
                  <li>
                    <a onClick={() => {
                      scrollToView('projects');
                      setMenuOpen(false);
                    }}>Projetos</a>
                  </li>
                </ul>
              </nav>
            </ContentMenu>
          </Menu>
        ) }
      </Header>
      <Wrapper>
        <Content>
          <strong>Olá, eu sou</strong>
          <h1>Leandro Siqueira</h1>
          <h2>Desenvolvedor Front-End</h2>

          <Buttons>
            <Link href='https://www.linkedin.com/in/leandrosiq1/' passHref>
              <a target='_blank'>
                <img src='/assets/linkedin.svg' alt='Linkedin' />
                Linkedin
              </a>
            </Link>
            <Link href='https://github.com/oleandrosiq' passHref>
              <a target='_blank'>
                <img src='/assets/github.svg' alt='Github' />
                Github
              </a>
            </Link>
          </Buttons>
        </Content>
        <img src='/assets/background.svg' alt='' />
      </Wrapper>
    </Container>
  );
}