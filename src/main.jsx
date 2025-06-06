import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PageLayout from './Components/PageLayout/PageLayout';
import Home from './pages/Home';
import Features from './pages/Features';
import Practitioners from './pages/Practitioners';
import Clients from './pages/Clients';
import Work from './pages/Work';

const router = createBrowserRouter([
  {
    path : '/',
    element : <PageLayout />,
    children : [
      {
        path : '/',
        element : <Home />
      },
      {
        path : '/home',
        element : <Home />
      },
      {
        path : '/features',
        element : <Features />
      },
      {
        path : '/practitioners',
        element : <Practitioners />
      },
      {
        path : '/clients',
        element : <Clients />
      },
      {
        path : '/work',
        element : <Work />
      }
    ]
  },
  {

  }
])  

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
