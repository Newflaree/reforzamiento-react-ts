import { useEffect, useState } from 'react';

const MAXIMUN_COUNT = 10;

export const CounterEffect = () => {
  const [ counter, setCounter ] = useState(5);

  const handleClick = () => {
    setCounter( prev => Math.min( prev + 1, MAXIMUN_COUNT ) );
  }

  useEffect( () => {
    if ( counter < 10 ) return;
    console.log( '%cSe llegó al valor máximo', 'color: red; background-color: black;' );
  }, [ counter ]);

  return (
    <>
      <h3>CounterEffect: { counter }</h3>

      <button onClick={ handleClick }>
        +1
      </button>
    </>
  );
}
