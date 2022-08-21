import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <h1>Panaderia Peruana</h1>
      <Navbar />
      <header className="App-header">
      
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Proyecto Panadería - CanoMantilla
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
