import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import ItemListContainer from './container/itemListContainer';

function App() {
  return (
    <div className="App">
      <h1>Panaderia Peruana</h1>
      <Navbar />
      <ItemListContainer greeting="Productos destacados" color="yellow" />
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
