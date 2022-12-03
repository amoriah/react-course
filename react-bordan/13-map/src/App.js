import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';

const names = [
  "btn1",
  "btn2",
  "btn3",
  "btn4",
  "btn5"
]

function App() {
const [count, setCount] = useState(3);

const increment = () => {
  setCount(count + 1);
}

  return (
    <div className="App">
      <Counter count={count} />
      {names.map((name, i) => { 
        return <Button btnName={name} onClick={increment} key={i}/>
      })}
    </div>
  );
}

export default App;
