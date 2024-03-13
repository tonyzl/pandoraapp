import React from 'react'
import { Link } from 'react-router-dom'

import { UserAuth } from '../context/AuthContext'
import { signOut } from 'firebase/auth'

function Navbar() {

  const {user,googleSignIn,logOut} = UserAuth()


  const handleSignIn = async()=>{
    try {
      await googleSignIn()
    } catch (error) {
      console.log(error);
    }
  }

  const handleSignOut = async()=>{
    try {
      await logOut()
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className='absolute w-full flex items-center justify-between z-50 p-4 md:p-8'>
       <Link className='flex' to='/'>
        <h1 className='uppercase text-blue-900 font-nsans-bold cursor-pointer text-5xl '>pandorapp</h1>
       </Link>

       {!user?(       <ul className="flex text-blue-900 bg-white">
          <li onClick={handleSignIn} className='p-2 cursor-pointer'>
            Ingresar
          </li>

       </ul>):(

        <div className='text-blue-900 bg-white'>
            <p>Bienvenid@, {user.displayName||user.email}</p>
            <p className='cursor-pointer' onClick={handleSignOut}>Cerrar sesión</p>
        </div>
       )}

    </div>
  )
};

export default Navbar