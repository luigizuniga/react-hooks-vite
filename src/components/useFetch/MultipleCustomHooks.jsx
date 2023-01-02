import { useFetch  } from "../../hooks/useFetch"
import { useCounter } from "../../hooks/useCounter"
import { LoadingQuote } from "./LoadingQuote"
import { Quote } from "./Quote"

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);
//   const { author , quote } = !!data && data[0];

  return (
    <>
        <h2>BreakingBad Quotes / API </h2>
        {
            isLoading 
            ? <LoadingQuote />
            : <Quote />
            // : <Quote author={ author } quote={ quote } />
        }
        <br/>
        <button disabled={ isLoading } onClick={ ()=> increment() }>Next Quote</button>
    </>
  )
}
