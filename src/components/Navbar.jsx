import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='absolute w-full flex items-center justify-between z-50 p-4 md:p-8'>
       <Link to='/'>
        <h1 className='uppercase text-blue-900 font-nsans-bold cursor-pointer text-5xl '>pandorapp</h1>
       </Link>
       <div>
            <Link to='/login' className='mx2'>
                <button className='bg-blue-900'>Iniciar Sesión</button>
            </Link>
            <Link to='/Signup' className='mx-2'>
                <button className='bg-blue-900'>Registrate</button>
            </Link>
        </div>
    </div>
  )
};

export default Navbar