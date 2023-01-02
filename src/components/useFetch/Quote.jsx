import { useLayoutEffect, useRef, useState } from 'react';

export const Quote = ({ author, quote }) => {
  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 })

  useLayoutEffect(() => {
    const { height, width } =  pRef.current.getBoundingClientRect();
    setBoxSize({ height, width });
  }, [quote])
  
  return (
    <>
      <blockquote 
        style={{ display: 'flex' }}>
          <p ref={ pRef }>{ quote }</p>
          <footer> { author } </footer>
      </blockquote>
      <code>{ JSON.stringify(boxSize) }</code>
    </>
  )
}