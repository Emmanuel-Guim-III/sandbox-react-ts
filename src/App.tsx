import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const buttonClass =
    'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded min-w-14';

  return (
    <div className="flex items-center justify-center min-h-screen gap-4">
      <button
        className={buttonClass}
        onClick={() => setCount((count) => count - 1)}
      >
        -
      </button>
      <h1 className="font-bold text-2xl">count is {count}</h1>
      <button
        className={buttonClass}
        onClick={() => setCount((count) => count + 1)}
      >
        +
      </button>
    </div>
  );
}

export default App;
