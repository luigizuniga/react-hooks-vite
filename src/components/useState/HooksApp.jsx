import { useState } from 'react'

import reactLogo from './../../assets/react.svg'

export const HooksApp = () => {
    const [count, setCount] = useState(0);
    return (
        <>
            <h1>React Hooks</h1>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src="/vite.svg" className="logo" alt="Vite logo" />
                </a>
                <a href="https://reactjs.org" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <div className="card">
                <h2>useState only one value</h2>
                <button
                    onClick={() => setCount((count) => count + 1)} >
                    count is {count}
                </button>
            </div>
            <p>Editar <code>App.jsx</code> para visualizar componentes</p>
            <hr />
        </>
    )
}