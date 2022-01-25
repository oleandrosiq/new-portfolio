import { styled } from '../../styles/styled';

export const Container = styled('div', {
  maxWidth: '50rem',
  width: '100%',
  margin: '0 auto',
});

export const Header = styled('header', {
  marginTop: '2rem',

  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '1.5rem',

  textAlign: 'center',

  '> img': {
    width: '12rem',
    height: '12rem',
    borderRadius: '50%',
  },

  '> h1': {
    fontSize: '2.3rem',
  },

  '> p': {
    fontSize: '1.7rem',
    opacity: '0.6',
  }
});

export const Main = styled('main', {
  width: '100%',
  maxWidth: '54rem',
  margin: '3rem auto 2rem',

  padding: '0 2rem',

  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '2rem',

  '> a': {
    width: '100%',
    height: '10rem',

    background: '#c9c9c9',
    borderRadius: '0.5rem',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    fontSize: '1.8rem',
    fontWeight: '500',
    color: 'var(--white)',

    transition: 'filter 0.2s ease-in-out',

    '&:hover': {
      filter: 'brightness(0.8)',
    },

    '&.instagram': {
      background: 'linear-gradient(to bottom right, #eb0c79, #f6a415)',
    },

    '&.linkedin': {
      background: 'linear-gradient(to bottom right, #0c14eb, #15bcf6)',
    },

    '&.github': {
      background: 'linear-gradient(to bottom right, #048f95, #19b695)',
    },
  }
});

export const ButtonContact = styled('button', {
  width: '100%',
  height: '5rem',
  marginBottom: '5rem',

  border: '0',
  borderRadius: '0.5rem',
  background: 'linear-gradient(to right, #1956b6, #17aae7)',

  fontSize: '1.6rem',
  color: 'var(--white)',

  transition: '0.2s ease-in-out',

  '&:hover': {
    filter: 'brightness(0.8)',
  }
});

export const Footer = styled('footer', {
  width: '100%',
  maxWidth: '50rem',
  margin: '0 auto 2rem',

  textAlign: 'center',

  '> p': {
    fontSize: '1.8rem',
    opacity: '0.6',

    transition: '0.2s ease-in-out',

    '&:hover': {
      opacity: '1',
    }
  },

  'a': {
    fontSize: '2rem',
    color: '#048f95'
  }
});

export const ContentModal = styled('div', {
  width: '100%',
  height: '100%',
  marginTop: '3.5rem',

  display: 'flex',
  flexDirection: 'column',
  gap: '2rem'
});