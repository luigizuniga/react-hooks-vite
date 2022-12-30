import { useState } from 'react';

export const CounterApp = () => {
    const [state, setState] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    });

    const { counter1, counter2, counter3 } = state;

    return (
        <>
            <div className='card'>
                <h2>Counter with more values for setState</h2>
                <p>Counter 1: {counter1}</p>
                <p>Counter 2: {counter2}</p>
                <p>Counter 3: {counter3}</p>
                <button
                    onClick={
                        () => setState({
                            ...state,
                            counter1: counter1 + 1,
                            counter2: counter2 + 1,
                            counter3: counter3 + 1
                        })
                    }>
                    Add 1
                </button>
                <p>Editar <code>CounterApp.jsx</code> para visualizar componentes</p>
            </div>
            <hr />
        </>
    )
}
