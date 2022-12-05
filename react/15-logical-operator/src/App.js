import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
// import Reset from './components/Reset';

const btnName = [
  "btn1",
  "btn2",
  "btn3",
  "btn4",
]

function App() {
const [count, setCount] = useState(0);

const increment = () => {
  setCount(count + 1);
}

const resetCount = () => {
  console.log("hi")
  setCount(0);
}

  return (
    <div className="App">
      <Counter count={count} />
      <Button btnName={btnName[0]} onClick={increment}/>
      <Button btnName={btnName[1]} onClick={increment}/>
      <Button btnName={btnName[2]} onClick={increment}/>
      <Button btnName={btnName[3]} onClick={increment}/>
      {
         count > 0 && ( <div> <button style={ {backgroundColor: 'green'}} onClick={resetCount}>Recet</button></div>)
      }
    </div>
  );
}

export default App;
