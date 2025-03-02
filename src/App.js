import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import TeamManagerOverview from './components/TeamManagerOverview';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <TeamManagerOverview />
    </div>
  );
}

export default App;
