
import { globalCss } from '@stitches/react';

const Styles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: 'DM Sans, sans-serif',
  },

  ':root': {
    '--white': '#F5F5F5',
    '--gray': '#e2e8f0',
    '--black': '#141416',

    '--purple': '#ae68e6',
    '--pink': '#fc76a1',
    '--yellow': '#dbbe56',
    '--orange': '#e39264',
    '--red': '#d25a61',
    '--blue': '#3b82f6',
    '--aa': '#17aae7',
    '--green': '#61faa9',

    '--border': '#31313c',
    '--border-light': '#3b3b46',
    '--background-button': '#3d3c50', 
    '--background-button-hover': '#47465a',
    '--background': '#1c1b2d',
    '--shape': '#21212b',
    '--shape-dark': '#1e1e29',
    '--shape-hover': '#272732',
    '--line': '#373746',
  },

  body: {
    background: 'var(--background)',
    color: 'var(--white)',
    scrollBehavior: 'smooth',

    '.about': {
      scrollBehavior: 'smooth',
    }
  },

  html: {
    fontSize: '62.5%',
  },

  button: {
    cursor: 'pointer',
  },

  a: {
    textDecoration: 'none',
  }
});

export const GlobalStyles = () => {
  const css = Styles();
  return css;
};