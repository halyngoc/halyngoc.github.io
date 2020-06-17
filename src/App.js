import React from 'react';
import HomePage from './components/HomePage';
import Nav from './components/Nav';
import { theme, GlobalStyles } from './globalStyle'
import { ThemeProvider } from 'styled-components'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className='App'>
        <Nav onItemClick={item => console.log(item)} />
        <HomePage />
      </div>
    </ThemeProvider>
  );
}

export default App;
