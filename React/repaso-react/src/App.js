import logo from './logo.svg';
import './App.css';
import { PrimerComponents } from './components/PrimerComponents';
import SegundoComponents from './components/SegundoComponents';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Esto es una prueba</p>


        <PrimerComponents />
        <SegundoComponents />
      </header>
    </div>
  );
}

export default App;
