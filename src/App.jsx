import React from 'react';
import Cart from './components/Cart';
import Dashboard from './components/Dashboard';
import Rootlayout from './components/Rootlayout';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
          } from "react-router-dom"

const App = () => {

  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Rootlayout/>}>
               <Route index element={<Dashboard/>}></Route>
               <Route path='/cart' element={<Cart/>}></Route>
      </Route>
    )
  )

  return (
    <div className='App'>
    
    <RouterProvider router={router}/>
    
    </div>
  );
};

export default App;