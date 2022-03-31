//Libraries
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify';
//Routes
import Routes from './routes';
//Components
import NavBar from './components/NavBar'
//Redux 
import store from './redux/store';
//Styles
import "react-loading-skeleton/dist/skeleton.css";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <NavBar />
        <Routes />
      </Provider>
      <ToastContainer/>
    </BrowserRouter>
  );
}

export default App;
