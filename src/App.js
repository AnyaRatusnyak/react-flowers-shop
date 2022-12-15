import { RouterProvider } from 'react-router-dom';

import { router } from './router';
import { Loader } from './components/ui/loader/loader';

export const App = () => (
  <RouterProvider router={router} fallbackElement={<Loader />}></RouterProvider>
  
  //ааа
);
