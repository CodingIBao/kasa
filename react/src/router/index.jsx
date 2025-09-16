// KASA/react/src/router/index.jsx

import { createBrowserRouter } from 'react-router-dom';
import App from '../App.jsx';
import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';
import Logement from '../pages/Logement.jsx';
import NotFound from '../pages/NotFound.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'logement/:id', element: <Logement /> },
    ],
  },
]);
