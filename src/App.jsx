import { useDispatch, useSelector } from 'react-redux';

import reactLogo from './assets/react.svg';
import './App.css';

import { decrement, increment, incrementBy } from './slices/counter/counterSlice';

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

      <h1>count is: { counter }</h1>

      <div className="card">
        <button onClick={() => dispatch( increment() )}>
          Increment
        </button>
        <button onClick={() => dispatch( decrement() )}>
          Decrement
        </button>
        <button onClick={() => dispatch( incrementBy(2) )}>
          Increment by 2
        </button>
      </div>
      
    </div>
  );
}

export default App
