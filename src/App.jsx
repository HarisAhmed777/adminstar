import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Admindashboard from './components/admindashboard/admindashboard'
import Allusers from './components/admindashboard/allusers'
import Allforms from './components/admindashboard/allforms'
import Allbookings from './components/admindashboard/allbookings'
import Login from './components/Login/login';
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path = '/'element = {<Login/>}/>
    <Route path = '/admin'element = {<Admindashboard/>}/>
    <Route path = '/allusers'element = {<Allusers/>}/>
    <Route path = '/allforms'element = {<Allforms/>}/>
    <Route path = '/allbookings'element = {<Allbookings/>}/>



    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
