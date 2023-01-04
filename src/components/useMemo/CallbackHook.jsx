import { useCallback, useState ,useEffect} from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
    const [counter, setCounter] = useState(10);

    const incrementFather = useCallback(
        (value) => { setCounter((c) => c + value) },[]
    );

    useEffect(() => {
        // incrementFather()
    }, [incrementFather])

    return (
        <>
            <div className="card">
                <h2>useCallback Hook</h2>
                <p>{counter}</p>
                <ShowIncrement increment= { incrementFather } />
            </div>
        </>
    )
}

