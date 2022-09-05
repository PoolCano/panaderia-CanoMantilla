import './App.css';
import Navbar from './components/navbar';
import ItemListContainer from './container/itemListContainer';
import ItemList from './components/itemList';

function App() {


  return (
    <div className="App">
      <h1>Panaderia Peruana</h1>
      <Navbar />
      <ItemListContainer greeting="Productos destacados" color="yellow" />
      <ItemList color = "green"/>
      
    </div>
  );
}

export default App;
