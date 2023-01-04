import { memo } from 'react'

export const Hijo = memo(({ numero, incrementar }) => {
    console.log("Me genero desde el Hijo :(");

    return (
    <>
        <button
            onClick={ ()=> incrementar(numero)}
        >
         { numero }
        </button>
    </>
  )
})
