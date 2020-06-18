import React, { useState } from 'react';
import Nav from './components/Nav';
import { theme, GlobalStyles } from './globalStyle'
import { ThemeProvider } from 'styled-components'
import HomePage from './components/HomePage';
import MyWorkPage from './components/MyWorkPage'
import MyProjectsPage from './components/MyProjectsPage'
import styled from 'styled-components'
import Logo from './components/Logo'

const Watermark = styled.div`
  position: absolute;
  top: ${props => props.isOneColumnLayout ? '5rem' : '15rem'};
  left: ${props => props.isOneColumnLayout ? '0' : '40%'};
  right: 0;
  z-index: -1;
  fill: ${theme.watermark};
  transform: ${props => props.isOneColumnLayout ? 'rotate(-10deg) scale(0.75)' : 'rotate(-10deg) scale(1.1)'};
`
const AppContainer = styled.main`
  overflow-x: hidden;
  width: 100%;
  margin: 0 auto;
  position: relative;
`

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppContainer>
        <Nav onItemClick={item => setCurrentPage(item)} selectedItem={currentPage} />
        <Logo wrapper={Watermark} />
        <HomePage />
        <MyWorkPage />
        <MyProjectsPage />
      </AppContainer>
    </ThemeProvider>
  )
}

export default App
