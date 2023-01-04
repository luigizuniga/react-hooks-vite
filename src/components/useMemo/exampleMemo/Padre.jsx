import React, { useCallback, useState } from 'react'
import { Hijo } from './Hijo';

export const Padre = () => {
   const numeros = [2,4,6,8,10];
   const [ valor, setValor ] = useState(0);

   const incrementar = useCallback(
    ( num )=>{
        setValor((oldValue) => oldValue + num)
    },[]
   )

  return (
    <>
        <div className='card'>
            <h2>Father Component</h2>
            <p>Total: { valor }</p>
            { 
                numeros.map( n => (
                    <Hijo key={ n }
                        numero={ n }
                        incrementar={ incrementar }
                    />
                ))
            }
        </div>
    </>
  )
}
