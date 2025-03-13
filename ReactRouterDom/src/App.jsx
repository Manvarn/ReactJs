import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import About from "./components/About";
import Home from "./components/Home";
import Movie from "./components/Movie";
import Contact from "./components/Contact";
import Products from "./components/Products";
import ShowDetail from "./components/ShowDetail";
import "./index.css";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/movie",
          element: <Movie />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/products/:id",
          element: <ShowDetail />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
