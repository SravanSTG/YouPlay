import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import MainContainer from './components/MainContainer';
import WatchVideo from './components/WatchVideo';
import store from './redux/store';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <MainContainer />
      },
      {
        path: "watch",
        element: <WatchVideo />
      }
    ]
  }
])

function App() {
  return (
    <Provider store={store}>
      <Header />
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
