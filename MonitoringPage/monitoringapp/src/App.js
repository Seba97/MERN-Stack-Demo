import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from "jquery";
import HeartRateMonitor from './components/HeartRateMonitor';
import {Row, Col} from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <header>
        <h1>Monitoring App</h1>
      </header>
      <body>
        <HeartRateMonitor/>
      </body>
    </div>
  );
}

export default App;
