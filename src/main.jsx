import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromChildren, createRoutesFromElements } from "react-router-dom"
import { Calculator, CurrencyConverter } from './Components/index.js'

const  router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Calculator />}  />
      <Route  path='converter' element={<CurrencyConverter />} />
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
