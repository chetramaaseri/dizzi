import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Footer from "./components/layout/footer/Footer";
import Navbar from "./components/layout/navbar/Navbar";
import Home from "./pages/Home";
import WhatWeDo from './pages/WhatWeDo';
import OurServices from './pages/OurServices';


function App() {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  );
}
const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    children : [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "whatwedo",
        element: <WhatWeDo/>
      },
      {
        path: "ourservices",
        element: <OurServices/>
      }
    ]

  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
