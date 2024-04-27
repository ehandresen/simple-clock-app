import Header from './components/Header';
import Clock from './components/Clock';
import CurrentDate from './components/CurrentDate';

const App = () => {
  return (
    <div>
      <div className="header">
        <Header title="CLOCK" />
      </div>

      <div className="container">
        <div id="date-background">
          <CurrentDate />
        </div>

        <div id="clock-background">
          <Clock />
        </div>
      </div>
    </div>
  );
};

export default App;
