import logo from './logo.svg';
import './App.css';
import GreetingF from './components/pure/greetingF';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <GreetingF name='Pamela'/>
        
        
      </header>
    </div>
  );
}

export default App;
