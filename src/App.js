import React, { useState } from 'react';
import Nav from './components/Nav';
import { theme, GlobalStyles } from './globalStyle'
import { ThemeProvider } from 'styled-components'
import HomePage from './components/HomePage';
import MyWorkPage from './components/MyWorkPage'
import MyProjectsPage from './components/MyProjectsPage'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className='App'>
        <Nav onItemClick={item => setCurrentPage(item)} selectedItem={currentPage} />
        <HomePage />
        <MyWorkPage />
        <MyProjectsPage />
      </div>
    </ThemeProvider>
  )
}

export default App
