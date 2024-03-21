import { useState } from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Calculator, CurrencyConverter, Home } from './Components';
import { Outlet } from 'react-router-dom';
import "./App.css";
function App() {

  return (
   <>
  <Home />
   </>
  )
}

export default App
