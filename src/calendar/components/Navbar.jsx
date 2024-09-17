import React from 'react'

export const Navbar = () => {
  return (
    <nav className='bg-gray-800 text-white'>
        <div className='mx-auto max-w-7xl px-2 sm:p-6 lg:px-8'>
            <div className='flex h-3 items-center justify-between'>
                <span className='text-lg'>
                    <i className='fas fa-calendar-alt'></i>
                    &nbsp;
                    Steven
                </span>
                <button className='bg-red-500 w-24 h-8 shadow-md rounded-md font-medium hover:bg-red-700'>
                    <i className='fas fa-sign-out-alt'></i>
                    &nbsp;
                    Salir
                </button>
            </div>
        </div>
    </nav>
  )
}


