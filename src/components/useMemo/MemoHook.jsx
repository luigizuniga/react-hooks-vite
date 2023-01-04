import { useState, useMemo } from "react"
import { useCounter } from "../../hooks/useCounter"

const heavyStuff = ( iterationNumber = 100 ) => {
    for (let i = 0; i < iterationNumber; i++) {
        console.log("Lets Go :) ");
    }
    return `${ iterationNumber } iteraciones realizadas`;
}

export const MemoHook = () => {
  const { counter, increment } = useCounter(40)
  const [ show, setShow ] = useState(true)

  const memorizedValue= useMemo( ()=> heavyStuff(counter), [counter]);

  return (
    <>
    <div className="card">
        <h2>Counter with useMemo hooks</h2>
        <h3>Counter: <small>{ counter }</small></h3>
        <br/>
        <p>{ memorizedValue }</p>
        <br/>
        <button onClick={() => increment()}>
            + 1
        </button>
        <button onClick={() => setShow(!show)}>
            Show / hide {JSON.stringify(show)}
        </button>
    </div>
</>
  )
}
