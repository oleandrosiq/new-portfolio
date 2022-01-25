import { styled } from '../../styles/styled';

export const Container = styled('div', {
  position: 'relative',
});

export const Overlay = styled('div', {
  width: '100vw',
  height: '100vh',

  position: 'fixed',
  left: 0,
  top: 0,
  bottom: 0,
  right: 0,

  background: 'rgba(0, 0, 0, 0.5)',
});

export const Content = styled('div', {
  minWidth: '50rem',
  padding: '2.5rem',
  zIndex: '10',

  position: 'fixed',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',

  borderRadius: '0.5rem',
  background: 'var(--background)',

  '> h1': {
    fontSize: '2rem',
    marginBottom: '1.5rem'
  }
});

export const ButtonCloseModal = styled('button', {
  border: 0,
  background: 'none',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  position: 'absolute',
  top: '1rem',
  right: '1rem',

  transition: 'all 0.2s ease-in-out',

  '&:hover': {
    filter: 'brightness(1.3)',
  }
});