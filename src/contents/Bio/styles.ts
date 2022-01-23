import { styled } from '../../styles/styled';

export const Container = styled('div', {
  width: '50rem',
  margin: '0 auto',
});

export const Header = styled('header', {
  marginTop: '2rem',

  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '1.5rem',

  '.circle-profile': {
    width: '12rem',
    height: '12rem',
    backgroundImage: 'url(/assets/profile.jpg)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    borderRadius: '100%',
    position: 'relative',
    textAlign: 'center',
    padding: '0.8rem',
    boxSizing: 'border-box',
  },

  '.circle-profile::before': {
    borderRadius: '50%',
    content: '',
    backgroundImage: 'linear-gradient(to bottom, #3e3e9a 0%, #00225e 60%)',
    top: '-0.4rem',
    left: '-0.4rem',
    bottom: '-0.4rem',
    right: '-0.4rem',
    position: 'absolute',
    zIndex: '-1',
  }
});