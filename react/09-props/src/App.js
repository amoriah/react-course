import './App.css';
import PetInfo from './components/PetInfo';

function App() {
  return (
    <div className="App">
    <PetInfo animal="frog" age={89} hasPet={false}/>
    </div>
  );
}

export default App;
