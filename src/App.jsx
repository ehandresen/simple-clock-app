import Clock from './components/Clock';
import CurrentDate from './components/CurrentDate';

const App = () => {
  return (
    <div>
      <div className="header">
        <div id="date-background">
          <CurrentDate />
        </div>
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
