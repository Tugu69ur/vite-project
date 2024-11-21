import React from 'react';
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { ClerkProvider } from '@clerk/clerk-react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Products from './pages/home/product';
import Home from './pages/home/Home';
import ProductDetails from './pages/home/ProductDetails';
import Cart from './pages/home/Cart';
import { CartProvider } from './pages/home/CartContext';
import Monopo from './pages/home/Monopo';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/products', element: <Products /> },
      { path: '/products/:productId', element: <ProductDetails /> },
      { path: '/cart', element: <Cart /> },
      { path: '/monopo', element: <Monopo /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY} afterSignOutUrl="/">
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </ClerkProvider>
  </StrictMode>
);
