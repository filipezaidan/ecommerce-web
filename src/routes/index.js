//Libraries
import { Routes, Route } from 'react-router-dom';
//Pages
import Home from '../pages/Home';
import ProductInfo from '../pages/ProductInfo';
import Cart from '../pages/Cart';
//Components
import Products from '../components/Products';

function RouterWrapper() {
  return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/product/:id" element={<ProductInfo />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
  );
}

export default RouterWrapper;
