import React from 'react';
import HomePage from './components/HomePage';
import TopNav from './components/TopNav';

function App() {
  return (
    <>
      <TopNav onTopNavItemClick={(item) => console.log(item)} />
      <HomePage />
    </>
  );
}

export default App;
