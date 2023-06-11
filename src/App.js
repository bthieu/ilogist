import './App.css';
import Activities from './pages/Activities';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>home</div>
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
