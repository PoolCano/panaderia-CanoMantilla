import './App.css';
import Navbar from './components/navbar';
import ItemListContainer from './container/itemListContainer';
import ItemList from './components/itemList';
import ItemDetailContainer from './container/ItemDetailContainer';

function App() {


  return (
    <div className="App">
      <h1>Panaderia Peruana</h1>
      <Navbar />
      <ItemListContainer greeting="Productos destacados" color="yellow" />
      <ItemList color = "green"/>
      <ItemDetailContainer/>
      
    </div>
  );
}

export default App;
