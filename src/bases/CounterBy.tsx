import { useEffect, useState } from 'react';

interface Props {
  initialValue?: number
}

interface CounterState {
  counter: number;
  clicks: number;
}

export const CounterBy = ( { initialValue = 5 }: Props ) => {
  const [ { counter, clicks }, setCounterState ] = useState<CounterState>({
    counter: initialValue,
    clicks: 0
  });

  const handleClick = ( value: number ) => {
    setCounterState( ({ clicks, counter }) => ({
      counter: counter + value,
      clicks: clicks + 1
    }));
  }

  return (
    <>
      <h2>CounterBy: { counter }</h2>
      <h2>Clicks: { clicks }</h2>

      <button onClick={ () => handleClick(1) }>
        +1
      </button>
      <button onClick={ () => handleClick(5) }>
        +5
      </button>
    </>
  );
}
