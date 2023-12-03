import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './components/AddCoffee.jsx';
import Register from './components/Register.jsx';
import LogIn from './components/LogIn.jsx';
import Common from './components/Common.jsx';
import Container from './components/Container.jsx';
import CoffeeDetails from './components/CoffeeDetails.jsx';
import UpdatedCoffeeInfo from './components/UpdatedCoffeeInfo';
import ErrorPage from './components/ErrorPage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Common />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [

      {
        path: '/',
        element: <Container></Container>,
        loader: () => fetch('http://localhost:3000/coffee')

      },

      {
        path: '/addCoffee',
        element: <AddCoffee></AddCoffee>
      },
      {
        path: '/coffeeDetails/:id',
        element: <CoffeeDetails></CoffeeDetails>,
        loader:({params}) => fetch(`http://localhost:3000/coffee/${params.id}`)

      },
      {
        path: '/login',
        element: <LogIn></LogIn>
      },
      {
        path: "/register",
        element: <Register />

      },
      {
        path: '/updateCoffeeInfo/:id',
        element: <UpdatedCoffeeInfo></UpdatedCoffeeInfo>,
        loader: ({ params }) => fetch(`http://localhost:3000/coffee/${params.id}`)
      }


    ]
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
