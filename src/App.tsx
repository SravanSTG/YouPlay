import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import MainContainer from './components/MainContainer';
import WatchVideo from './components/WatchVideo';
import SearchResults from './components/SearchResults';
import Subscriptions from './components/Subscriptions';
import WatchLater from './components/WatchLater';
import LikedVideos from './components/LikedVideos';
import Category from './components/Category';
import store from './redux/store';
import Error from './layout/Error';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <MainContainer />
      },
      {
        path: "watch",
        element: <WatchVideo />
      },
      {
        path: "results",
        element: <SearchResults />
      },
      {
        path: "subscriptions",
        element: <Subscriptions />
      },
      {
        path: "watchlater",
        element: <WatchLater />
      },
      {
        path: "liked",
        element: <LikedVideos />
      },
      {
        path: "feed/:category",
        element: <Category />
      }
    ]
  }
])

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
