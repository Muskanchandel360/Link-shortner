import React from 'react'

const Navbar = () => {
  return (
    <nav className=' fixed w-full bg-gradient-to-r from-slate-900 to-slate-700 shadow-2xl flex items-center justify-between px-10 py-3'>
      <h1 className='text-lg text-white font-black uppercase'>Shortly</h1>
      <button className='bg-blue-600 px-3 py-0.5 rounded-md'>
        <p className='text-sm font-bold text-white'>V1.0</p>
      </button>
    </nav>
  )
}

export default Navbar
