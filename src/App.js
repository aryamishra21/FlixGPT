import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AppLayout from './components/AppLayout';
import BrowsePage from './pages/BrowsePage';
import LoginPage from './pages/LoginPage';

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
          path:'login',
          element:<LoginPage/>,
      }
      ]
  }
])

function App() {
  return (
    <RouterProvider router={route}/>
  );
}

export default App;
