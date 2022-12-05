import './App.css';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <div className="App">
      <Wrapper color="lightblue">
        <h1>Text inside of the Wrapper</h1>
        <button>like!</button>
      </Wrapper>
      <Wrapper color="lightgreen">
        <h1>Another Text inside of the Wrapper</h1>
        <p>Some description</p>
        <input type="text" placeholder="enter value"></input>
      </Wrapper>
    </div>
  );
}

export default App;
