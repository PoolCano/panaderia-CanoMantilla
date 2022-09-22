import './App.css';
import Navbar from './components/navbar';
import ItemListContainer from './container/itemListContainer';
import ItemDetailContainer from './container/ItemDetailContainer';
import Cart from './components/cart';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import CartProvider from './context/CartContext';



function App() {

  return (
    <div className="App">
      <h1>Panaderia Peruana</h1>
      <BrowserRouter>
      <CartProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:categoryId' element={<ItemListContainer />} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/item/:detailId' element={<ItemDetailContainer />} />
      </Routes>
      </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
