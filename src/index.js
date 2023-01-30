import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './Practices/Component/About';
import Error from './Practices/Component/Error';
import Contact from './Practices/Component/Contact';
import Body from './Practices/Component/Body';
import RestaurentMenu from './Practices/Component/RestaurentMenu';
import Shimmer from './Practices/Component/Shimmer';
// import InstaMart from './Practices/Component/InstaMart';

// Chunking
// Cod splitting
// Dynamic bundling
// Lazy loading
// On Demand Loading
// Dynamic Import

const InstaMart=lazy(()=>import("./Practices/Component/InstaMart"))

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<App />,
    errorElement:<Error />,
    children: [
      {
        path:"/",
        element:<Body />
      },
      {
        path:"/about",
        element:<About />
      },
      {
        path:"/contact",
        element:<Contact />
      },
      {
        path:"/restaurent/:id",
        element:<RestaurentMenu />
      },
      {
        path:"/instamart",
        element:<Suspense fallback={<Shimmer />}><InstaMart /></Suspense>
      }
   ]
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <RouterProvider router={appRouter} />
  </>
);




