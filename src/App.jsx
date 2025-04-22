import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import OurServices from './pages/OurServices';
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import Acrepair from './pages/services/AcRepair';
import GeyserRepair from './pages/services/GeyserRepair';
import MicrowaveRepair from './pages/services/MicrowaveRepair';
import RefrigeratorRepair from './pages/services/RefrigeratorRepair';
import LedTvRepair from './pages/services/LedTvRepair';
import WashingMachineRepair from './pages/services/WashingMachineRepair';
import WaterCoolerRepair from './pages/services/WaterCoolerRepair';
import WaterDispenserRepair from './pages/services/WaterDispenserRepair';
import CctvRepair from './pages/services/CctvRepair';
import RoPurifierRepair from './pages/services/RoPurifierRepair';
import ChimneyRepair from './pages/services/ChimneyRepair';
import AirDryer from './pages/services/AirDryer';
import AirCompressor from './pages/services/AirCompressor';
import Privacy from './pages/Privacy';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/services", element: <OurServices /> },
      { path: "/services/acrepair", element: <Acrepair /> },
      { path: "/services/gyser", element: <GeyserRepair /> },
      { path: "/services/microwave", element: <MicrowaveRepair /> },
      { path: "/services/refrigerator", element: <RefrigeratorRepair /> },
      { path: "/services/ledtv", element: <LedTvRepair /> },
      { path: "/services/washingmachine", element: <WashingMachineRepair /> },
      { path: "/services/watercooler", element: <WaterCoolerRepair /> },
      { path: "/services/waterdispenser", element: <WaterDispenserRepair /> },
      { path: "/services/cctv", element: <CctvRepair /> },
      { path: "/services/ropurifier", element: <RoPurifierRepair /> },
      { path: "/services/chimney", element: <ChimneyRepair /> },
      { path: "/services/dryer", element: <AirDryer /> },
      { path: "/services/compressor", element: <AirCompressor /> },
      { path: "/faq", element: <Faq /> },
      { path: "/contact", element: <Contact /> },
      { path: "/policy", element: <Privacy /> }
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

// import React, { lazy, Suspense } from 'react';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// // Lazy imports
// const Layout = lazy(() => import('./components/Layout'));
// const Home = lazy(() => import('./pages/Home'));
// const About = lazy(() => import('./pages/About'));
// const OurServices = lazy(() => import('./pages/OurServices'));
// const Faq = lazy(() => import('./pages/Faq'));
// const Contact = lazy(() => import('./pages/Contact'));
// const Acrepair = lazy(() => import('./pages/services/AcRepair'));
// const GeyserRepair = lazy(() => import('./pages/services/GeyserRepair'));
// const MicrowaveRepair = lazy(() => import('./pages/services/MicrowaveRepair'));
// const RefrigeratorRepair = lazy(() => import('./pages/services/RefrigeratorRepair'));
// const LedTvRepair = lazy(() => import('./pages/services/LedTvRepair'));
// const WashingMachineRepair = lazy(() => import('./pages/services/WashingMachineRepair'));
// const WaterCoolerRepair = lazy(() => import('./pages/services/WaterCoolerRepair'));
// const WaterDispenserRepair = lazy(() => import('./pages/services/WaterDispenserRepair'));
// const CctvRepair = lazy(() => import('./pages/services/CctvRepair'));
// const RoPurifierRepair = lazy(() => import('./pages/services/RoPurifierRepair'));
// const ChimneyRepair = lazy(() => import('./pages/services/ChimneyRepair'));
// const AirDryer = lazy(() => import('./pages/services/AirDryer'));
// const AirCompressor = lazy(() => import('./pages/services/AirCompressor'));
// const NotFound = lazy(() => import('./pages/NotFound'));
// const Privacy = lazy(() => import('./pages/Privacy'));
// import Privacy from './pages/Privacy';


// // Optional loader component
// const Loader = () => (
//   <div className="flex justify-center items-center h-screen">
//     <p className="text-xl font-semibold">Loading...</p>
//   </div>
// );

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       { path: '/', element: <Home /> },
//       { path: '/about', element: <About /> },
//       { path: '/services', element: <OurServices /> },
//       { path: '/services/acrepair', element: <Acrepair /> },
//       { path: '/services/geyser', element: <GeyserRepair /> }, // fixed typo
//       { path: '/services/microwave', element: <MicrowaveRepair /> },
//       { path: '/services/refrigerator', element: <RefrigeratorRepair /> },
//       { path: '/services/ledtv', element: <LedTvRepair /> },
//       { path: '/services/washingmachine', element: <WashingMachineRepair /> },
//       { path: '/services/watercooler', element: <WaterCoolerRepair /> },
//       { path: '/services/waterdispenser', element: <WaterDispenserRepair /> },
//       { path: '/services/cctv', element: <CctvRepair /> },
//       { path: '/services/ropurifier', element: <RoPurifierRepair /> },
//       { path: '/services/chimney', element: <ChimneyRepair /> },
//       { path: '/services/dryer', element: <AirDryer /> },
//       { path: '/services/compressor', element: <AirCompressor /> },
//       { path: '/faq', element: <Faq /> },
//       { path: '/contact', element: <Contact /> },
//       { path: '*', element: <NotFound /> },
//       { path: '/policy', element: <Privacy /> }
//     ],
//   },
// ]);

// const App = () => {
//   return (
//     <Suspense fallback={<Loader />}>
//       <RouterProvider router={router} />
//     </Suspense>
//   );
// };

// export default App;
