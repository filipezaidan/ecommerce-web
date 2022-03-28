//Libraries
import { BrowserRouter } from 'react-router-dom';
//Routes
import Routes from './routes';
//Components
import NavBar from './components/NavBar'
//Styles
import "react-loading-skeleton/dist/skeleton.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes/>
    </BrowserRouter>
  );
}

export default App;
