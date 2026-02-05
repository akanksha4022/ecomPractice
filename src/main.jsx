import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Cart from './pages/Cart.jsx'

import Login from './pages/Login.jsx'
import SignUp from './pages/SignUp.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

import Home from './pages/Home.jsx'
import { CartProvider } from './context/CartContext.jsx'

import Orders from './pages/Orders.jsx'
import { AuthProvider } from './context/AuthContext.jsx'


const router =createBrowserRouter([{
    path: '/',
    element : <App />,
    errorElement : <NotFoundPage />,
    children: [
      {
        index : true,
        element : <Home />
      },
       {
        path: '/cart',
        element : <Cart />
      },
           
      {
        path: '/orders',
        element : <Orders />
      },      
      
    ]

  },
  {
      path: '/login',
      element : <Login />
    },
    {
      path: '/signup',
      element : <SignUp />
    },
 

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </AuthProvider>
    
    
  </StrictMode>,
)
