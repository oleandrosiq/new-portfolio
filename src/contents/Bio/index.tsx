import { useRef } from 'react';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { MainModal, ModalHandles } from '../../components/MainModal';

import { Container, Header, Main, ButtonContact, Footer, ContentModal } from './styles';

export function Bio() { // Gerar pagina estatica 
  const modalRef = useRef<ModalHandles>(null);

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
          ⚛️ Javascript • React • Typescript • NextJs • NodeJS
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
      <ButtonContact type='button' onClick={() => modalRef.current?.openModal()}>
        Entrar em contato
      </ButtonContact>
      <Footer>
        <p>Developed by <a href='https://www.instagram.com/oleandrosiq/' target='_blank'>@oleandrosiq</a></p>
      </Footer>
      <MainModal
        ref={modalRef}
        titleModal='Entrar em contato'
      >
        <ContentModal>
          <Input placeholder='Nome' />
          <Input placeholder='E-mail' />
          <Input placeholder='Celular' />

          <Button 
            textButton='Enviar'
          />
        </ContentModal>
      </MainModal>
    </Container>
  );
}