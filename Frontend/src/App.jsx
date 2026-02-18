import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import ListingPage1 from './pages/ListingPage1'
import ListingPage2 from './pages/ListingPage2'



const App = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/login' element={<Login/>}  />
        <Route path='/listingpage1' element={<ListingPage1/>}  />
        <Route path='/listingpage2' element={<ListingPage2/>}  />
 </Routes>
    </>
  )
}

export default App