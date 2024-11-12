import './App.css';
import { useAppDispatch, useAppSelector } from './hooks/useRedux';
import { RootState } from './store';

function App() {
  const count = useAppSelector((state: RootState) => state.counter.value);
  const dispatch = useAppDispatch();

  const buttonClass =
    'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded min-w-14';

  return (
    <div className="flex items-center justify-center min-h-screen gap-4">
      <button
        className={buttonClass}
        onClick={() => dispatch({ type: 'counter/increment' })}
      >
        -
      </button>
      <h1 className="font-bold text-2xl">count is {count}</h1>
      <button
        className={buttonClass}
        onClick={() => dispatch({ type: 'counter/decrement' })}
      >
        +
      </button>
    </div>
  );
}

export default App;
