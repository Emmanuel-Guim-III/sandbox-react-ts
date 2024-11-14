import './App.css';
import { useAppDispatch, useAppSelector } from './hooks/useRedux';

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const buttonClass =
    'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded min-w-14';

  return (
    <div className="flex items-center justify-center min-h-screen gap-4">
      <button
        className={buttonClass}
        onClick={() => dispatch({ type: 'counter/decrement' })}
      >
        -
      </button>
      <h1 className="font-bold text-2xl">count is {count}</h1>
      <button
        className={buttonClass}
        onClick={() => dispatch({ type: 'counter/increment' })}
      >
        +
      </button>
      <button
        className={buttonClass}
        onClick={() =>
          dispatch({ type: 'counter/incrementByAmount', payload: 10 })
        }
      >
        +10
      </button>
    </div>
  );
}

export default App;
