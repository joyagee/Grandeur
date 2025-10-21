import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Mencloths from './pages/MenCloth.jsx'
import ChildrenCloths from './pages/ChildrenCloths.jsx'
import WomenCloths from './pages/WomenCloths.jsx'
import NewArrivals from './pages/NewArrivals.jsx'
import Cart from './pages/Cart.jsx'
import ProductProvider from './Context/ProductContext.jsx'


import Signup from './pages/SignUp.jsx'

import Login from './pages/login.jsx'
import SingleProduct from './pages/SingleProduct.jsx'


const router =createBrowserRouter ([{
  element:<App/>,
  path:"/",
  children:[
    {
    index:true,
    element:<Home/>,
  },
   {
    element:<About/>,
    path:'/about',
  },
   {
    element:<Cart/>,
    path:'/cart',
  },

   {
    element:<Contact/>,
    path:'/contact',
  },
   {
    element:<NewArrivals/>,
    path:'/newarrivals',
  },
   {
    element:<Mencloths/>,
    path:'/mencloths',
  },
 {
    element:<WomenCloths/>,
    path:'/womencloths',
  },
   {
    element:<ChildrenCloths/>,
    path:'/childrencloths',
  },

   {
    element:<Signup/>,
    path:'/signup',
  },
    {
    element:<SingleProduct/>,
    path:'/product/:id',
  },
  

  {
    element:<Login/>,
    path:'/login',
  },


]
}])


createRoot(document.getElementById('root')).render(
 <ProductProvider>
 <StrictMode>
    <RouterProvider router ={router} />
  </StrictMode>
  </ProductProvider>
)
