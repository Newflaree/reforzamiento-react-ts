import {useCounter} from './hooks/useCounter';


export const CounterHook = () => {
  const { counterElement, counter, handleClick } = useCounter();

  return (
    <>
      <h3>CounterHook:</h3>
      <h4 ref={ counterElement }>{ counter }</h4>

      <button onClick={ handleClick }>
        +1
      </button>
    </>
  );
}
