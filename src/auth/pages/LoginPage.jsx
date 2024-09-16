import React from 'react'

export const LoginPage = () => {

    

  return (
    <>
        <div className='flex h-screen w-screen'>
            <div className='flex flex-row justify-center items-center h-screen w-screen'>
                <div className='bg-white h-1/2 w-1/3 rounded-md shadow-2xl'>
                    <div className='flex flex-col items-center w-full h-full mt-10'>
                        <h1 className='font-medium text-xl'>Ingreso</h1>
                        <div className='flex flex-col w-2/3 mt-7'>
                            <input 
                                className='h-8 pl-2 rounded-lg border-2 outline-none focus:border-blue-600 transition-colors' 
                                type="text"
                                placeholder='Correo'
                            />
                            <input 
                                className='h-8 pl-2 rounded-lg border-2 outline-none focus:border-blue-600 mt-3 transition-colors'
                                type="password" 
                                placeholder='Contraseña'
                            />
                        </div>
                        <div className='flex flex-col w-2/3 mt-5 justify-start items-start'>
                            <button 
                                className='w-40 h-8  bg-blue-600 text-blue-50 font-bold rounded-md hover:bg-blue-400 transition-colors'
                                type='submit'
                            >
                                Iniciar sesión
                            </button>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center bg-blue-500 h-1/2 w-1/3 rounded-md shadow-2xl'>
                    <div className='flex flex-col items-center w-full h-full mt-10'>
                            <h1 className='font-medium text-xl text-white'>Registro</h1>
                            <div className='flex flex-col w-2/3 mt-7'>
                                <input 
                                    className='h-8 pl-2 rounded-lg border-2 outline-none focus:border-blue-400 transition-colors' 
                                    type="text" 
                                    placeholder='Nombre'
                                />
                                <input 
                                    className='h-8 pl-2 rounded-lg border-2 outline-none focus:border-blue-400 mt-2 transition-colors'
                                    type="text" 
                                    placeholder='Correo'
                                />
                                <input 
                                    className='h-8 pl-2 rounded-lg border-2 outline-none focus:border-blue-400 mt-2 transition-colors'
                                    type="password" 
                                    placeholder='Contraseña'
                                />
                                <input 
                                    className='h-8 pl-2 rounded-lg border-2 outline-none focus:border-blue-400 mt-2 transition-colors'
                                    type="password" 
                                    placeholder='Repita la Contraseña'
                                />
                            </div>
                            <div className='flex flex-col w-2/3 mt-5 justify-start items-start'>
                                <button 
                                    className='w-40 h-8 bg-white text-blue-500 font-bold rounded-md hover:bg-gray-100 transition-colors'
                                    type='submit'
                                >
                                        Crear cuenta
                                    </button>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </>
  )
}
