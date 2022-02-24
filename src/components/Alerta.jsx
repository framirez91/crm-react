import React from 'react'

const Alerta = ({children}) => {
  return (    
        <div className='text-center text-white bg-red-500 text-l font-bold p-3 uppercase my-4 '>
            {children}
         </div> 
  )
}

export default Alerta