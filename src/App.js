import logo from './logo.svg';
import './App.css';

import {Greet} from './Components/Greet';
import Welcome from './Components/Welcome';

function App() {
  const actualName = 'Nagaraju';
  return (
    <div className="App">
      <Greet name={actualName} test=""></Greet>
      <Welcome />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
