import logo from './logo.svg';
import './App.css';
import TaskComponent from './components/pure/task';
import TaskListComponent from './components/container/task_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente de exemplo Funcional*/}
        {/* <GreetingF name="Frida"/> */}
        {/*Componente de Listado de Tareas*/}
        <TaskListComponent/>
        
      </header>
    </div>
  );
}

export default App;
