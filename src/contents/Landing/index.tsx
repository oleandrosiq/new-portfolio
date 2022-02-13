import Link from 'next/link';
import { ElementsProps } from '../Home';

import { 
  Container,
  Header,
  Content,
  Wrapper,
  Buttons,
} from './styles';

interface LandingProps {
  scrollToView: (element: ElementsProps) => void;
}

export function Landing({ scrollToView }: LandingProps) {
  return (
    <Container> 
      <Header>
        <h1>LS</h1>

        <nav>
          <ul>
            <li>
              <a onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                Home
              </a>
            </li>
            <li>
              <a onClick={() => scrollToView('about')}>About</a>
            </li>
            <li>
              <a onClick={() => scrollToView('experience')}>Experiência</a>
            </li>
            <li>
              <a onClick={() => scrollToView('projects')}>Projetos</a>
            </li>
          </ul>
        </nav>
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