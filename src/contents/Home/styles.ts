import { styled, keyframes } from '../../styles/styled';

const entryBottom = keyframes({
  from: {
    opacity: '0',
    top: '35%',
  },
  to: {
    opacity: '1',
    top: '50%',
  },
});

export const ContainerCenter = styled('div', {
  width: '100%',
  margin: '0 auto',
  padding: '0 3rem',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const Socials = styled('div', {
  width: '7rem',

  borderRadius: '0.8rem 0 0 0.8rem',
  background: 'var(--shape)',

  position: 'fixed',
  top: '50%',
  right: '0',
  transform: 'translateY(-50%)',

  display: 'flex',
  flexDirection: 'column',

  animation: `${entryBottom} 650ms ease-out`,

  '> p': {
    width: '100%',
    height:' 6rem',

    borderRadius: '0.8rem 0 0 0',
    background: '#2033fa',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    fontSize: '1.4rem',
  },

  '> a': {
    width: '100%',
    height: '6rem',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: '0.5rem',

    fontSize: '1.2rem',
    color: 'var(--white)',

    transition: 'all 0.2s ease-in-out',
    cursor: 'pointer',

    '&:last-child': {
      borderRadius: '0 0 0 0.8rem',
    },

    '&:hover': {
      filter: 'brightness(1.2)',
    }
  },

  '@media (max-width: 600px)': {
    display: 'none',
  }
});