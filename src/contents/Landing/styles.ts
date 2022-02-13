import { styled, keyframes } from '../../styles/styled';

const entryLeft = keyframes({
  from: { 
    opacity: '0',
    marginLeft: '-20rem',
  },
  to: { 
    opacity: '1',
    marginLeft: '0',
  },
});

const entryRight = keyframes({
  from: {
    opacity: '0',
    marginRight: '-20rem',
  },
  to: {
    opacity: '1',
    marginRight: '0',
  },
});

const entryBottom = keyframes({
  from: {
    opacity: '0',
    marginBottom: '-20rem',
  },
  to: {
    opacity: '1',
    marginBottom: '0',
  },
});

const entryTop = keyframes({
  from: {
    opacity: '0',
    top: '-20rem',
  },
  to: {
    opacity: '1',
    top: '0',
  },
});

const animationBackground = keyframes({
  from: {
    opacity: '0',
    bottom: '-50rem',
  },
  to: {
    opacity: '1',
    bottom: '0',
  },
});

export const Container = styled('section', {
  width: '100%',
  maxWidth: '150rem',
  margin: '0 auto',
});

export const Header = styled('header', {
  width: '100%',
  maxWidth: '150rem',

  padding: '2rem 8rem',
  margin: '0 auto',
  background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%)',
  
  position: 'fixed',
  top: '0',
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: '10',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  '> h1': {
    fontSize: '3rem',
    animation: `${entryLeft} 350ms ease-out`,
    cursor: 'pointer',
  },

  '> nav': {
    animation: `${entryRight} 350ms ease-out`,

    'ul': {
      listStyle: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: '2.5rem',

      'li': {
        fontSize: '1.6rem',
        fontWeight: 'bold',

        '> a': {
          color: 'var(--white)',

          transition: 'color 200ms ease-out',
          cursor: 'pointer',

          '&:hover': {
            color: 'var(--blue)',
          }
        }
      }
    },

    '@media (max-width: 600px)': {
      display: 'none',
    }
  },

  '> button': {
    border: 0,
    background: 'none',

    display: 'none',
    alignItems: 'center',
    justifyContent: 'center',
  },

  '@media (max-width: 600px)': {
    padding: '2rem 4rem',
    position: 'relative',

    '> button': {
      display: 'flex',
    }
  }
});

export const Menu = styled('div', { 
  width: '100%',
  padding: '2rem',

  background: 'var(--blue)',
  
  position: 'absolute',
  top: '0',
  left: '0',
  
  zIndex: '50',
  animation: `${entryTop} 350ms ease-out`,

  '> button': {
    border: 0,
    background: 'none',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
    position: 'absolute',
    top: '2rem',
    right: '2rem',
  }
});

export const ContentMenu = styled('div', {
  width: '100%',

  '> nav': {
    width: '100%',
    
    'ul': {
      listStyle: 'none',

      display: 'flex',
      alignItems: 'center',
      gap: '2rem',
      flexDirection: 'column',

      '> li': {
        fontSize: '2rem',
      }
    }
  }
});

export const Wrapper = styled('main', {
  width: '100%',
  height: '60rem',

  display: 'flex',
  alignItems: 'center',

  position: 'relative',

  '> img': {
    height: '50rem',

    animation: `${animationBackground} 350ms ease-out`,

    position: 'absolute',
    bottom: '0',
    right: '0',

    '@media (max-width: 730px)': {
      height: '45rem',
    },

    '@media (max-width: 600px)': {
      height: '35rem',
    },
  }
});

export const Content = styled('div', {
  width: 'max-content',
  minHeight: '10rem',

  padding: '0 8rem',
  lineHeight: '4rem',
  // zIndex: '10',

  '> strong, > h2': {
    fontSize: '2.3rem',
    textTransform: 'uppercase',
  },

  '> h1': {
    fontSize: '4rem',
    textTransform: 'uppercase',
    color: 'var(--blue)',
    animation: `${entryLeft} 400ms ease-out`,
  },

  '@media (max-width: 680px)': {
    padding: '0 4rem',

    '> h1': {
      fontSize: '3rem',
    },

    '> strong, > h2': {
      fontSize: '2rem',
      textTransform: 'uppercase',
    },
  },

  '@media (max-width: 580px)': {
    width: '100%',
  },

  '@media (max-width: 460px)': {
    '> h1': {
      fontSize: '2rem',
    },

    '> strong, > h2': {
      fontSize: '1.6rem',
    }
  },
});

export const Buttons = styled('div', {
  marginTop: '4rem',

  display: 'flex',
  alignItems: 'center',
  gap: '3rem',

  animation: `${entryBottom} 400ms ease-out`,
  
  '> a': {
    padding: '0.8rem 3rem',

    border: '1px solid var(--blue)',
    borderRadius: '0.4rem',

    display: 'flex',
    alignItems: 'center',
    gap: '1rem',

    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'var(--white)',

    transition: 'all 200ms ease-out',

    '&:hover': {
      background: 'var(--blue)',
    }
  },

  '@media (max-width: 400px)': {
    flexDirection: 'column',

    '> a': {
      width: '100%',
      justifyContent: 'center',
    }
  },
});