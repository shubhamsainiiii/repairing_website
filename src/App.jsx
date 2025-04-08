import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import OurServices from './pages/OurServices';
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import Acrepair from './pages/services/AcRepair';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/services", element: <OurServices /> }, 
      { path: "/faq", element: <Faq /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
