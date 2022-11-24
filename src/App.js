import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './Routes/Routes/Routes';

function App() {
  return (
    <div className='md:mx-10 mx-5' data-theme='mytheme'>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
