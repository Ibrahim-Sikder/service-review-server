
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main';
import Blog from '../../Pages/Blog/Blog';
import Home from '../../Pages/Home/Home';
import Login from '../../Pages/Login/Login';
import Service from '../../Pages/Services/Service';
import DisplayServiceDetails from '../../Pages/Services/DisplayServiceDetails';
import SignUp from '../../Pages/SingUp/SingUp';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import AddService from '../../Pages/AddService/AddService';
import Reviews from '../../Pages/Reviews/Reviews';

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path:'/',
          element: <Home></Home>
        },
        {
            path: '/home',
            element:<Home></Home>
        },
       
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        {
          path:'/blog',
          element: <Blog></Blog>
        },
        {
          path:'/review',
          element: <PrivateRoute><Reviews></Reviews></PrivateRoute>
        },
        {
          path: '/addservice',
          element: <PrivateRoute><AddService></AddService></PrivateRoute>
        },
        {
          path:'/service',
          element:<Service></Service>

        },
        {
          path:'/service/:id',
          element: <PrivateRoute><DisplayServiceDetails></DisplayServiceDetails></PrivateRoute>,
          loader: ({params}) => fetch(`https://b6a11-service-review-server-side-ibrahim-sikder.vercel.app/services/${params.id}`)
        }
       
        
        
      ]
    
    }
  ])
  export default router ;