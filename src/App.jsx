import { useDispatch, useSelector } from 'react-redux';

import reactLogo from './assets/react.svg';
import './App.css';
import { increment } from './slices/counter/counterSlice';

function App() {

  const { counter } = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">

      <div>
        <a href="#vite">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="#react">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

      <div className="card">
        <button onClick={() => dispatch( increment() )}>
          count is { counter }
        </button>
      </div>
      
    </div>
  );
}

export default App
