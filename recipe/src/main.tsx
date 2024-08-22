import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import Catalog from './components/catalog/Catalog.tsx';
import ErrorPage from './components/error/error.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Catalog />,
    errorElement: <ErrorPage />,
  },
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
