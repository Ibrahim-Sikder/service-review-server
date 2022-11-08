
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main';
import Blog from '../../Pages/Blog/Blog';
import Home from '../../Pages/Home/Home';
import Login from '../../Pages/Login/Login';
import Review from '../../Pages/Review/Review';
import Service from '../../Pages/Services/Service';
import SignUp from '../../Pages/SingUp/SingUp';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

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
          path:'/review',
          element: <PrivateRoute><Review></Review></PrivateRoute>
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
          path:'/service',
          element: <Service></Service>
        }
       
        
        
      ]
    
    }
  ])
  export default router ;