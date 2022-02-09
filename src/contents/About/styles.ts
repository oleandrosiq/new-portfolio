import { styled } from '../../styles/styled';

export const Container = styled('section', {
  width: '100%',
  maxWidth: '90rem',
  minHeight: '40rem',

  marginTop: '4rem',
  paddingTop: '2rem',
  position: 'relative',

  display: 'flex',
  gap: '5rem',

  '> .circle': {
    width: '15rem',
    height: '15rem',
    
    borderRadius: '50%',
    background: 'linear-gradient(95.16deg, #0c14eb 3.76%, #15bcf6 83.3%)',
    filter: 'blur(80px)',

    position: 'absolute',
    top: '7rem',
    left: '0',
    zIndex: '1',
  },
});

export const WrapperImage = styled('div', {
  width: '27rem',

  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
});

export const Image = styled('img', {
  width: '100%',
  height: '30rem',

  borderLeft: '4px solid var(--blue)',
  borderRadius: '0 0.8rem 0.8rem 0',
  background: 'none',
  zIndex: '2',

  objectFit: 'cover',
  objectPosition: 'center',

  transition: 'all 300ms ease-in-out',

  '&:hover': {
    transform: 'scale(1.05)',
  } 
});

export const Techs = styled('div', {
  width: '100%',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2rem',
  flexWrap: 'wrap',

  '> svg': {
    transition: 'all 200ms ease-in-out',

    '&:hover': {
      transform: 'scale(1.3)',
    }
  }
});

export const Content = styled('main', {
  flex: 1,
  height: '100%',

  '> h1': {
    fontSize: '2.4rem',
  },

  '> strong': {
    fontSize: '1.8rem',
    marginTop: '2.5rem',
    display: 'block',
  },

  '> p': {
    fontSize: '1.8rem',
    marginTop: '1.5rem',
    color: '#C4C4C4',
  }
});

export const Socials = styled('div', {
  width: '100%',
  height: '5rem',
  marginTop: '2rem',

  display: 'flex',
  alignItems: 'center',
  gap: '1.5rem',

  '> a': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    transition: 'all 200ms ease-in-out',

    '&:hover': {
      transform: 'scale(1.1)',
      filter: 'brightness(1.2)',
    }
  }
});

export const Buttons = styled('div', {
  width: '100%',
  height: '6rem',
  marginTop: '2rem',

  display: 'flex',
  alignItems: 'center',
  gap: '3rem',

  '> button': {
    minWidth: '15rem',
    padding: '0.8rem 2.5rem',

    border: '2px solid transparent',
    borderRadius: '0.4rem',
    background: 'var(--background)',

    fontSize: '1.6rem',
    color: 'var(--white)',
    
    display: 'flex',
    alignItems: 'center',
    justifyContente: 'center',
    gap: '1rem',

    transition: 'all 300ms ease-in-out',

    '&:hover': {
      filter: 'brightness(1.3)',
      transform: 'scale(1.04)',
    }
  },

  '> button:first-child': {
    borderImage: 'linear-gradient(to bottom right, #0c14eb, #15bcf6) 1',
    '-webkit-mask': 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
  },

  '> button:last-child': {
    borderImage: 'linear-gradient(to bottom right, #eb0c79, #f6a415) 1',
    '-webkit-mask': 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
  }
});