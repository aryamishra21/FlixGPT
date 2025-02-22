import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AppLayout from './components/AppLayout';
import BrowsePage from './pages/BrowsePage';
import LoginPage from './pages/LoginPage';
import { Provider } from 'react-redux';
import store from './utils/store/store'
const route=createBrowserRouter([
  {
      path:'/',
      element:<AppLayout/>,
      children:[
        {
          path:'browse',
          element:<BrowsePage/>,
      },
      {
          path:'/',
          element:<LoginPage/>,
      }
      ]
  }
])

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={route}/>
    </Provider>
  );
}

export default App;
