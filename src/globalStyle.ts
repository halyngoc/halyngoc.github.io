import { createGlobalStyle, DefaultTheme } from 'styled-components'

export const breakpoints = {
  mobile: 600,
  tablet: 960,
  laptop: 1280,
  desktop: 1920,
}

export const defaultTheme: DefaultTheme = {
  palette: {
    background: '#EEEEEE',
    text: '#2F576E',
  },
  spacing: {
    numberOfColumns: 12,
    columnWidth: 'calc(100vw / 12)',
    sectionMargin: '0 calc(100vw / 12)',
  },
}

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    font-family: 'Barlow', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    background-color: ${({ theme }) => theme.palette.background};
    color: ${({ theme }) => theme.palette.text};
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
    background-color: ${({ theme }) => theme.palette.text};
    border-radius: 10px;
    border: none;
  }
  * {
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => theme.palette.text + ' #ffffff00'};
  }
`
