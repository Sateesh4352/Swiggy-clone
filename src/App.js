import React from 'react'
import Header from './components/Header/Header'
import Body from './components/Body/Body'
import About from './components/About/About';
import RestaurantsItems from './components/RestaurantsItems/RestaurantsItems';
import {createBrowserRouter, Outlet } from "react-router-dom";
import ContactUs from './components/ContactUs/ContactUs';
import {Provider} from 'react-redux'
import appStore from './utils/appStore';
import Cart from './components/Cart/Cart';

const App = () => {
  return (
    <Provider store={appStore}>
      <div>
        <Header/>
        <Outlet/>
      </div>
    </Provider>
  )
}

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Body/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/restaurants/:resid',
        element:<RestaurantsItems/>
      },
      {
        path:'/contactus',
        element:<ContactUs/>
      },
      {
        path:'/cart',
        element:<Cart/>
      }
    ]

  }
])

export default appRouter
