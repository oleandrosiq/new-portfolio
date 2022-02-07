import { styled, keyframes } from '../../styles/styled';
import * as Tabs from '@radix-ui/react-tabs';

export const Container = styled('section', {
  width: '100%',
  height: '30rem',
  
  maxWidth: '75rem',
  marginTop: '4rem',

  '> h1': {
    fontSize: '2.4rem',
  }
});

export const TabsRoot = styled(Tabs.Root, {
  marginTop: '3rem',
  borderLeft: '1px solid #373746',
  
  display: 'flex',
  gap: '2rem',
});

export const TabsList = styled(Tabs.List, {
  width: '20rem',

  display: 'flex',
  flexDirection: 'column',
});

export const TabsTrigger = styled(Tabs.Trigger, {
  width: '100%',
  height: '5.5rem',

  border: 0,
  background: 'var(--background)',
  zIndex: '1',

  fontSize: '1.8rem',
  color: '#9a9aad',

  transition: 'all 0.2s ease-in-out',

  '&[data-state=active]': {
    borderLeft: '2px solid var(--blue)',
    background: 'var(--shape)',
    color: 'var(--white)',

    '&:hover': {
      background: 'var(--shape-hover)',
    }
  },

  '&:hover': {
    borderLeft: '2px solid var(--blue)',
  },

  variants: {
    variant: {
      loading: {
        cursor: 'not-allowed',
        pointerEvents: 'none',
        background: '#0b0b13'
      }
    }
  }
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
});

export const ContentTab = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',

  '> strong': {
    color: 'var(--blue)',
  },

  '> p': {
    opacity: '0.8',
  }
});