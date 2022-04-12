import {useCounter} from './hooks/useCounter';


export const CounterHook = () => {
  const { elementToAnimate, counter, handleClick } = useCounter({ maxCount: 15 });

  return (
    <>
      <h3>CounterHook:</h3>
      <h4 ref={ elementToAnimate }>{ counter }</h4>

      <button onClick={ handleClick }>
        +1
      </button>
    </>
  );
}
