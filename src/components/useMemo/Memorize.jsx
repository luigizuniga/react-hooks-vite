import { useState } from "react"
import { useCounter } from "../../hooks/useCounter"
import { Small } from "./Small"

export const Memorize = () => {
    const { counter, increment } = useCounter(40)
    const [show, setShow] = useState(true)

    return (
        <>
            <div className="card">
                <h2>Counter with useMemo hooks</h2>
                <h3>Counter: <Small value={counter} /></h3>
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
