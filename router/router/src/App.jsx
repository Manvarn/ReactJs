import { About } from "./Components/About";
import { Home } from "./Components/Home";
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { Products } from "./Components/Products";
import { Contect } from "./Components/Contect";
import { AppLayout } from "./Components/AppLayout";
import { ProductsDetail } from "./Components/productsDetail";


const App = () => {
  

  const router = createBrowserRouter([
   {
    path:"/",
    element:<AppLayout />,
    children:[
      {
        path:"/Home",
        element:<Home />,
      },
      {
        path:"/About",
        element:<About />,
        
      },
      {
        path:"/Products",
        element:<Products />,
      },
      {
        path:"/Products/:productID",
        element:<ProductsDetail />
      },
      {
        path:"/Contact",
        element:<Contect />,
      },
    ]
   },
   
  ])
  return <RouterProvider router={router} /> 
}

export default App;