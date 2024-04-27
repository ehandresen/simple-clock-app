import Header from './components/Header';
import Clock from './components/Clock';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

const App = () => {
  return (
    <div>
      <div className="header">
        <Header title="CLOCK" />
      </div>
      <div className="container">
        <div id="clock-background">
          <Clock />
        </div>
      </div>
    </div>
  );
};

export default App;
