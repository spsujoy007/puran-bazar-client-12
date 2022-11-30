import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './Routes/Routes/Routes';

function App() {
  return (
    <div  data-theme="fantasy">
      <div className='md:px-2 px-2'>
      <RouterProvider router={routes}></RouterProvider>
      <Toaster></Toaster>
      </div>
    </div>
  );
}

export default App;
