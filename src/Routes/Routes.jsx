import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import CheckOut from "../pages/CheckOut/CheckOut";
import Bookings from "../pages/Bookings/Bookings";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'register',
          element:<Register></Register>
        },
        {
          path:'checkOut/:id',
          element:<PrivateRoutes><CheckOut></CheckOut></PrivateRoutes>,
           loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path:'bookings',
          element:<PrivateRoutes><Bookings></Bookings></PrivateRoutes>
        }
      ]
    },
  ]);
export default router;