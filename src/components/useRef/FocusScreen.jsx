import React , { useRef } from 'react'

export const FocusScreen = () => {
    const inputNameRef = useRef();
    
    const onClick = () => {
        inputNameRef.current.select();
    }

    return (
        <>
            <div className='card'>
                <h2>Focus Screen with hook useRef</h2>
                <input 
                    type="text"
                    placeholder="name"
                    ref={ inputNameRef }
                />
                <button onClick={ onClick }>Set Focus</button>
            </div>
        </>
    )
}
