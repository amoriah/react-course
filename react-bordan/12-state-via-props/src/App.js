import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';

function App() {
const [count, setCount] = useState(3);

const increment = () => {
  setCount(count + 1);
}

  return (
    <div className="App">
      <Counter count={count} />
      <Button onClick={increment}/>
      <Button onClick={increment}/>
      <Button onClick={increment}/>
      <Button onClick={increment}/>
    </div>
  );
}

export default App;
