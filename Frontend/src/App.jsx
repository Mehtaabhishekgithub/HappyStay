import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import ListingPage1 from './pages/ListingPage1'
import ListingPage2 from './pages/ListingPage2'
import ListingPage3 from './pages/ListingPage3'
import { userDataContext } from './Context/UserContext'
import { useContext } from 'react'



const App = () => {
  let {userData} = useContext(userDataContext)
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/login' element={<Login/>}  />
        <Route path='/listingpage1' element={userData != null ?<ListingPage1/>:<Navigate to={"/login"}/>}/>
        <Route path='/listingpage2' element={userData != null ?<ListingPage2/>:<Navigate to={"/login"}/> }/>
        <Route path='/listingpage3' element={userData != null ?<ListingPage3/>:<Navigate to={"/login"}/>}  />
 </Routes>
    </>
  )
}

export default App