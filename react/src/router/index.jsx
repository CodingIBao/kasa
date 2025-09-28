// KASA/react/src/router/index.jsx

import { createBrowserRouter } from 'react-router-dom';
import App from '../App.jsx';
import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';
import NotFound from '../pages/NotFound.jsx';
import ErrorLayout from '../components/ErrorLayout.jsx';
import AccommodationWrapper from '../components/AccommodationWrapper.jsx';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: (
      <ErrorLayout>
        <NotFound />
      </ErrorLayout>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: "a-propos", element: <About /> },
      { path: "logement/:id", element: <AccommodationWrapper /> },
      // {  path: "/simulate-error",
      //   loader: async () => {
      //     throw new Response("Internal Server Error", { status: 500 });
      //   },
      // }
    ],
  },
]);
