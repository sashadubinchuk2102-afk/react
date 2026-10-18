import { useState } from 'react';
import CounterDisplay from './CounterDisplay';
import CounterButton from './CounterButton';
import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleChange = (value) => {
    setCount(count + value);
  };

  return (
    <div className="counter-container">
      <h2>Лічильник</h2>
      <CounterDisplay count={count} />
      <div className="buttons-group">
        <CounterButton value={1} label="+1" onClick={handleChange} />
        <CounterButton value={10} label="+10" onClick={handleChange} />
        <CounterButton value={-100} label="-100" onClick={handleChange} />
        <CounterButton value={25} label="+25" onClick={handleChange} />
      </div>
    </div>
  );
};

export default Counter;