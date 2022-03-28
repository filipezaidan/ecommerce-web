//Libraries
import { Routes, Route } from 'react-router-dom';
//Pages
import Home from '../pages/Home';
import ProductInfo from '../pages/ProductInfo';
//Components
import Products from '../components/Products';

function RouterWrapper() {
  return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/product/:id" element={<ProductInfo />} />
      </Routes>
  );
}

export default RouterWrapper;
