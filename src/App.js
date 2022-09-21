import React from 'react';
import BitcoinPrice from './components/BitcoinPrice';
import Counter from './components/Counter';
import Header from './components/Header';

function App() {
  return (
    <div className='app'>
      <Header />
      <Counter />
      <BitcoinPrice />
    </div>
  );
}

export default App;
