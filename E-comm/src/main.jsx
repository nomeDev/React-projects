import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
// import Category from "./pages/Category/Category.jsx";
import Home from "./pages/Home/Home.jsx";
// import Products from "./pages/Products/Products.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      //   {
      //       path: '/category/:id',
      //       element: <Category />,
      //   },
      //   {
      //     path: "/product/:id",
      //     element: <Products />,
      //   },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);
