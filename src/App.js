import React from 'react';
import './App.css';
import Content from './components/Content';
import Navbar from './Navbar/Navbar';
import TotalTable from './section/TotalTable';
import Tab from './Tab/Tab';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Content />
    </div>
  );
}

export default App;
