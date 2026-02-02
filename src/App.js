import logo from './logo.svg';
import './App.css';

function App() {
  let title = "Wall-E";

  function ObslugaZdarzenia(Zdarzenie) {
    console.log(Zdarzenie.target.value);
    
  }
  return (
    <div>
      <h1>My favourite movies to watch</h1>
      <h2>My favourite movie for today is {title}</h2>
      <input type="text" onChange={ObslugaZdarzenia} />
    </div>
  );
}

export default App;
