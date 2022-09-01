import './App.css';
import Navbar from './components/navbar';
import ItemListContainer from './container/itemListContainer';
import { useState } from 'react';
import ItemList from './components/itemList';

function App() {

  const [cantidad, setCantidad] = useState(0);

  return (
    <div className="App">
      <h1>Panaderia Peruana</h1>
      <Navbar />
      <ItemListContainer greeting="Productos destacados" color="yellow" 
        cantidad = {cantidad}
        setCantidad = {setCantidad}
      
      />
      <ItemList color = "green"/>
    </div>
  );
}

export default App;
