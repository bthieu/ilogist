import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Activities from './pages/Activities';
import LogView from './pages/LogView';
import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LogView/>
  },
  {
    path: '/*',
    element: <Activities/>
  }
]);

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
