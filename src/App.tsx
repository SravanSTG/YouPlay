import { Provider } from 'react-redux';
import Header from './components/Header';
import Home from './components/Home';
import store from './redux/store';
import './index.css';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Home />
    </Provider>
  )
}

export default App
