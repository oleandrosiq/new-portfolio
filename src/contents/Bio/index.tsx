import { Container, Header, Main, Footer } from './styles';

export function Bio() { // Gerar pagina estatica 
  return (
    <Container>
      <Header>
        <img 
          src='https://super.abril.com.br/wp-content/uploads/2018/07/5672f6af82bee174ca03d239thinkstockphotos-153831740.jpeg' 
          alt='Temporary Image' 
        />

        <h1>Leandro Siqueira</h1>
        <p>
          ⚡ Desenvolvedor Front-End <br />
          ⚛️ Javascript • React • Typescript • NextJs
        </p>
      </Header>
      <Main>
        <a className='instagram' href='https://www.instagram.com/oleandrosiq/' target='_blank'>
          Instagram
        </a>
        <a className='linkedin' href='https://www.linkedin.com/in/leandrosiq1/' target='_blank'>
          Linkedin
        </a>
        <a className='github' href='https://github.com/oleandrosiq' target='_blank'>
          Github
        </a>
      </Main>
    </Container>
  );
}