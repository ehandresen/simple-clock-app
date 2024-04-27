import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

const App = () => {
  const [hour, setHour] = useState(new Date().getHours());
  const [minutes, setMinutes] = useState(new Date().getMinutes());
  const [seconds, setSeconds] = useState(new Date().getSeconds());

  function currentTime() {
    const date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    setHour(hour);
    setMinutes(minutes);
    setSeconds(seconds);
  }

  setInterval(() => {
    currentTime();
  }, 1000);

  return (
    <div>
      <div className="header">
        <Header title="CLOCK" />
      </div>
      <div className="container">
        <p id="clock-text">
          {hour}:{minutes < 10 ? '0' + minutes : minutes}:
          {seconds < 10 ? '0' + seconds : seconds}
        </p>
      </div>
    </div>
  );
};

export default App;
