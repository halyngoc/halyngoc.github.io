import { createGlobalStyle } from 'styled-components'

export const breakpoints = {
  mobile: 600,
  tablet: 960,
  laptop: 1280,
  desktop: 1920,
}

export const theme = {
  background: '#ECF0F1', // light blue
  watermark: '#D7E5E9',         // light blue
  text: '#34495E',       // dark blue 
  accent: '#3498DB',     // blue
  accent2: '#F8B500',    // yellow
}

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    margin: 0;
  }

  /* Scrollbar */
  *::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  *::-webkit-scrollbar-track {
    background: none;
  }
  *::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.text};
    border-radius: 10px;
    border: none;
  }
  * {
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => theme.text + ' #ffffff00'};
  }
`
