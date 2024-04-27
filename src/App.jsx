import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

const App = () => {
  return (
    <div>
      <div className="header">
        <Header title="CLOCK" />
      </div>
      <div className="container">
        <Button id="button" variant="primary" onClick={handleClick}>
          Change Background Color
        </Button>
      </div>
    </div>
  );
};

export default App;
