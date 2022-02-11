import { styled } from '../../styles/styled';

export const Container = styled('section', {
  width: '100%',
  maxWidth: '90rem',
  minHeight: '50rem',

  marginTop: '2rem',
  marginBottom: '4rem',

  display: 'flex',
  flexDirection: 'column',
  gap: '4rem',

  '> h1': {
    fontSize: '2.4rem',
  }
});

export const Projects = styled('div', {
  width: '100%',
  
  display: 'flex',
  justifyContent: 'center',
  gap: '3rem',
  flexWrap: 'wrap',
});

export const Project = styled('div', {
  width: '40rem',
});

export const BannerImage = styled('div', {
  height: '21rem',

  borderRadius: '0.4rem 0 0 0.4rem',
  position: 'relative',
  borderLeft: '5px solid var(--blue)',

  '> img': {
    objectFit: 'cover',
  },

  '> span': {
    '> img': {
      objectPosition: 'center',
    }
  }
});

export const Content = styled('div', {
  width: '100%',
  padding: '2rem 0',

  display: 'flex',
  flexDirection: 'column',
  gap: '2.5rem',

  '> h1': {
    fontSize: '2rem',
  },

  '> p': {
    fontSize: '1.6rem',
    color: '#C4C4C4',
  },

  '> strong': {
    fontSize: '1.4rem',
    color: 'var(--blue)',
  }
});

export const Buttons = styled('div', {
  width: '100%',
  height: '6rem',

  display: 'flex',
  alignItems: 'center',
  gap: '2rem',

  '> a': {
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

    borderImage: 'linear-gradient(to bottom right, #9358F7, #15bcf6) 1',
    '-webkit-mask': 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
    
    transition: 'all 300ms ease-in-out',
    cursor: 'pointer',

    '&:hover': {
      filter: 'brightness(1.3)',
      transform: 'scale(1.04)',
    }
  },
});