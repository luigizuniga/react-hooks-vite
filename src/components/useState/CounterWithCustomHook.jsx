import { useCounter } from "../../hooks/useCounter"

export const CounterWithCustomHook = () => {

  const { counter, increment, decrement, reset } = useCounter();

  return (
    <>
      <div className="card">
        <h2>Counter with CustomHook</h2>
        <h4>{counter}</h4>
        <button onClick={() => increment(12)}>Add + 12</button>
        <button onClick={() => decrement(12)}>Res - 12</button>
        <button onClick={reset}> Reset </button>
        <p>Editar <code>CounterWithCustomHook.jsx</code> para visualizar componentes</p>
      </div>
      <hr />
    </>
  )
}
