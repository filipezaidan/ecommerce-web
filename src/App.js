//Libraries
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
//Routes
import Routes from './routes';
//Components
import NavBar from './components/NavBar'
//Redux 
import store from './redux/store';
//Styles
import "react-loading-skeleton/dist/skeleton.css";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <NavBar />
        <Routes />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
