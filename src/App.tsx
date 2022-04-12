// Components
import { Counter } from "./bases/Counter";
import { CounterBy } from "./bases/CounterBy";

const App = () => {
  return (
    <>
      <Counter initialValue={ 15 } />
      <CounterBy />
    </>
  );
}

export default App;
