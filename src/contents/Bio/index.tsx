import { useCallback, useRef } from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { MainModal, ModalHandles } from '../../components/MainModal';
import { TextArea } from '../../components/TextArea';

import { Container, Header, Main, ButtonContact, Footer, ContentModal } from './styles';
import { InputMask } from '../../components/InputMask';

const schema = yup.object().shape({
  name: yup.string().required('O nome é obrigatório'),
  email: yup.string().email('Email inválido').required('O email é obrigatório'),
  phone: yup.string().required('O telefone é obrigatório'),
  
  message: yup.string().required('A mensagem é obrigatória'),
});

export function Bio() { // Gerar pagina estatica 
  const modalRef = useRef<ModalHandles>(null);

  const { register, handleSubmit, clearErrors, reset, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSubmitForm: SubmitHandler<any> = useCallback((values) => {
    console.log({ values });
    modalRef.current?.closeModal();
  }, []);

  return (
    <Container>
      <div className='circle'></div>
      <div className='circle1'></div>
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
        <ContentModal onSubmit={handleSubmit(handleSubmitForm)}>
          <Input 
            placeholder='Nome' 
            {...register('name')}
            error={errors.name} 
            onClick={() => clearErrors('name')}
          />

          <Input 
            type='email' 
            placeholder='E-mail' 
            {...register('email')}
            error={errors.email} 
            onClick={() => clearErrors('email')}
          />

          <InputMask 
            mask='+99 (99) 99999-9999'
            placeholder='Celular' 
            {...register('phone')}
            error={errors.phone} 
            onClick={() => clearErrors('phone')}   
          />

          <TextArea 
            placeholder='Mensagem' 
            {...register('message')}
            error={errors.message} 
            onClick={() => clearErrors('message')} 
          />

          <Button 
            type='submit'
            textButton='Enviar'
            style={{ 
              height: '5rem', 
              background: '#E63462',
              transition: '0.2s ease-in-out',
            }}
            loading={isSubmitting}
          />
        </ContentModal>
      </MainModal>
    </Container>
  );
}