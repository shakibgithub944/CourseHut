import { Toaster } from 'react-hot-toast';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Route/Route';



function App() {
  
  return (
    <div className="">
      <RouterProvider router={router}>
      </RouterProvider>
      <Toaster />
    </div>


  );
}

export default App;
