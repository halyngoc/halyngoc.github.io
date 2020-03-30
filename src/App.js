import React from 'react';
import HomePage from './components/HomePage';
import TopNav from './components/TopNav';
import './style.css';

function App() {
  return (
    <div className='App'>
      <TopNav onTopNavItemClick={(item) => console.log(item)} />
      <HomePage />
    </div>
  );
}

export default App;
