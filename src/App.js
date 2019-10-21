import React from 'react';
import Header from './components/Header/Header'
import Counter from './components/Counter/Counter'
import './App.css';
import CounterGroup from './components/CounterGroup/CounterGroup';

function App() {
  return (
    <div className="App-header">
      <CounterGroup defaultCount={3} />
    </div>
  );
}

export default App;
