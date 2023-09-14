import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import PokemonDetail from './components/PokemonDetail.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
    },
    {
      path: 'PokemonDetail',
      element: <PokemonDetail />,
    },
  ],
  { basename: import.meta.env.DEV ? '/' : '/Pokedex/' }
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
