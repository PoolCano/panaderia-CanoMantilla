import './App.css';
import Navbar from './components/navbar';
import ItemListContainer from './container/itemListContainer';
import { useState } from 'react';

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
      
    </div>
  );
}

export default App;
