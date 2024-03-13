import React from 'react'
import { Route, Routes } from 'react-router-dom';

import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from './components/Navbar';
import Account from './pages/Account';

import { AuthContextProvider } from './context/AuthContext';



const App = () => {
  return (
    <>
      <AuthContextProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/account' element={<Account/>}></Route>
      </Routes>
      </AuthContextProvider>
    </>
  )
};

export default App