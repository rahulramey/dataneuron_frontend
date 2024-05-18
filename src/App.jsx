// App.jsx
import React from 'react';
import './App.css';
import Box1 from './Components/Box1.jsx';
import Box2 from './Components/Box2.jsx';
import Box3 from './Components/Box3.jsx';

const App = () => {
  return (
    <div className="app">
      <header className="header">
        <h1>Welcome to My Website</h1>
      </header>

      <main className="main">
        <div className="row">
          <Box1/>
          <Box2/>
        </div>

        <div className="row">
          <Box3/>
        </div>
      </main>
    </div>
  );
};

export default App;
