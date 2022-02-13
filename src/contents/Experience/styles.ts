import { styled, keyframes } from '../../styles/styled';
import * as Tabs from '@radix-ui/react-tabs';

export const Container = styled('section', {
  width: '100%',
  maxWidth: '90rem',
  minHeight: '45rem',

  padding: '3rem 0',

  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',

  '> h1': {
    fontSize: '2.4rem',
  },
});

export const TabsRoot = styled(Tabs.Root, {
  marginTop: '3rem',
  
  display: 'flex',
  gap: '2rem',

  '@media (max-width: 1085px)': {
    paddingRight: '7rem',
  },

  '@media (max-width: 935px)': {
    flexDirection: 'column',
  },

  '@media (max-width: 600px)': {
    paddingRight: 'unset',
  },
});

export const TabsList = styled(Tabs.List, {
  minWidth: '20rem',

  display: 'flex',
  flexDirection: 'column',

  '@media (max-width: 935px)': {
    flexDirection: 'unset',
  },

  '@media (max-width: 540px)': {
    overflow: 'auto',
  },
});

export const TabsTrigger = styled(Tabs.Trigger, {
  width: '100%',
  height: '5.5rem',

  border: 0,
  borderLeft: '1px solid var(--line)',
  background: '#00021f',
  zIndex: '1',

  fontSize: '1.8rem',
  color: '#9a9aad',

  transition: 'all 0.2s ease-in-out',

  '&[data-state=active]': {
    borderLeft: '2px solid #2033fa',
    background: '#00021f',
    color: 'var(--white)',

    '&:hover': {
      color: '#5061fc',
    }
  },

  '&:hover': {
    borderLeft: '2px solid #2033fa',
    color: '#5061fc',
  },

  '@media (max-width: 540px)': {
    minWidth: '20rem',
  },

  variants: {
    variant: {
      loading: {
        cursor: 'not-allowed',
        pointerEvents: 'none',
        background: '#00021f'
      }
    }
  },
});

const entry = keyframes({
  from: { 
    opacity: '0',
    marginLeft: '-20rem',
  },
  to: { 
    opacity: '1',
    marginLeft: '0',
  },
});

export const TabsContent = styled(Tabs.Content, {
  width: '100%',
  fontSize: '1.6rem',
  overflow: 'hidden',

  '&[data-state="active"]': { 
    animation: `${entry} 350ms ease-out`,
  },
});

export const TabsHeader = styled('header', {
  width: '100%',
  height: '6rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '2rem',

  '@media (max-width: 625px)': {
    '> p.desktop': {
      display: 'none',
    },

    '> p.mobile': {
      display: 'unset',
    },
  },

  '@media (max-width: 400px)': {
    '> h1': {
      fontSize: '1.8rem',
    }
  },
});

export const ContentTab = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',

  '> span': {
    display: 'flex',
    alignItems: 'center',
    gap: '1.6rem',

    '> strong': {
      color: 'var(--blue)',
    },
  },

  '> p': {
    opacity: '0.8',
  },

  '@media (max-width: 400px)': {
    '> span': {
      '> strong': {
        fontSize: '1.5rem',
      },

      '> p': {
        fontSize: '1.4rem',
      }
    }
  },
});