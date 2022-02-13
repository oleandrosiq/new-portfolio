import { styled } from '../../styles/styled';

export const Container = styled('footer', {
  width: '100%',
  maxWidth: '150rem',
  margin: '0 auto',

  height: '11.6rem',
  padding: '0 5rem',
  borderTop: '1px solid var(--line)',
  background: '#1c1b2d',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  '@media (max-width: 880px)': {
    height: 'auto',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    borderTop: 0,
  }
});

export const Content = styled('div', {
  paddingRight: '5rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flex: 1,

  '> span': {
    display: 'flex',
    flexDirection: 'column',

    '> strong': {
      fontSize: '2.5rem',
    },

    '> p': {
      fontSize: '1.6rem',
      opacity: 0.7,
    }
  },

  '@media (max-width: 880px)': {
    flexDirection: 'column',
    gap: '3.5rem',
    paddingRight: 'unset',

    padding: '3rem 0 0',
  }
});

export const Instagram = styled('div', {
  fontSize: '1.6rem',
  color: 'var(--white)',

  display: 'flex',
  alignItems: 'center',
  gap: '1.6rem',

  '> a': {
    color: 'var(--white)',

    '&::after': {
      content: '',
      width: '100%',
      height: '1px',
      display: 'block',
      background: 'rgba(255,255,255,.4)',
      marginTop: '2px',

      transition: 'background 0.2s ease-in-out',
    },

    '&:hover': {
      '&::after': {
        background: 'var(--white)',
      }
    }
  },

  '@media (max-width: 880px)': {
    flexDirection: 'column',
    gap: '1rem',

    '.icon-desktop': {
      display: 'none',
    },

    '> span': {
      display: 'flex',
      alignItems: 'center',
      gap: '1.6rem',

      opacity: 0.8,
    }
  }
});

export const ButtonBackTop = styled('div', {
  width: '20rem',
  height: '100%',

  borderLeft: '1px solid var(--line)',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '> button': {
    border: 0,
    background: 'none',

    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: 'var(--white)',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1.6rem',

    '> div': {
      padding: '0.7rem',

      borderRadius: '50%',
      background: 'var(--shape)',

      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },

    '> p': {
      opacity: 0.6,
      transition: 'opacity 0.2s ease-in',
    },

    '&:hover': {
      '> p': {
        opacity: 1,
      },
    }
  },

  '@media (max-width: 880px)': {
    width: 'max-content',
    borderLeft: 0,
    margin: '5rem 0',
  }
});