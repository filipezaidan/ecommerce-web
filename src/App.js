//Libraries
import { BrowserRouter,  Routes, Route } from 'react-router-dom';
//Pages
import ProductInfo from './pages/ProductInfo';
//Components
import Home from './components/Home/Home';
import NavBar from './components/NavBar'
import Products from './components/Products';
//Styles
import "react-loading-skeleton/dist/skeleton.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/products" element={<Products/>}/>
        <Route exact path="/product/:id" element={<ProductInfo/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
