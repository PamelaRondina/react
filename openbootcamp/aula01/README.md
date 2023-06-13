# Aula 01 - React

## Componente de Classe

`Componente: Greeting`

~~~js
import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greeting extends Component {

    constructor(props){
        super(props);
        this.state = {
            age : 29
        }
    }

    render() {
        return (
            <div>
                <h1>
                    Hola { this.props.name }                    
                </h1>
                <h2>
                    Tu edad es de: { this.state.age }
                </h2>
                <div>
                    <button onClick={this.birthday}>
                        Cumplir años {}
                    </button>                    
                </div>
            </div>
        );
    }

    birthday = () => {        
        this.setState((prevState) => (
            {
                age: prevState.age + 1
            }            
        ))
    }
}



Greeting.propTypes = {
    name: PropTypes.string,
};


export default Greeting;


~~~~

`App.js`

~~~js
import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente proprio Greeting.jsx*/}
        <Greeting name="Frida"/>        
      </header>
    </div>
  );
}

export default App;
~~~

![image](https://github.com/PamelaRondina/PamelaRondina/assets/108991648/22f3733e-f287-4fa5-a3e1-3f131fcfbab9)


## Componente Funcional

`greetingF.jsx`
~~~js
import React, { useState } from 'react';
import PropTypes from 'prop-types';


const GrettingF = (props) => {

// Breve introdución a useState
// const [variable, método para actualizarlo] = useState(valor inicial)
const [age, setAge] = useState(29);

const birthday = () => {
    // actualizar el State
    setAge(age + 1);
}

    return (
        <div>
            <h1>
                Hola { props.name } desde componente funcional!
            </h1>
            <h2>
                Tu edad es de: { age }
            </h2>
            <div>
                <button onClick={birthday}>
                    Cumplir años {}
                </button>                    
            </div>
        </div>
    );
};
~~~

`App.js`
~~~js
import logo from './logo.svg';
import './App.css';
import GreetingF from './components/pure/greetingF';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente proprio Greeting.jsx*/}
        <GreetingF name="Frida"/>
        
      </header>
    </div>
  );
}

export default App;

~~~

![image](https://github.com/PamelaRondina/PamelaRondina/assets/108991648/6c217220-ae21-4807-b628-941dbcfaae8e)


<hr>


LEVELS: una tarea con una constante de NORMAL, URGENTE y BLOCKING 

TASK.CLASS: una clase con tipo tarea, con un pequño constructor.

TASK.JSX: un componente, que tiene una props llamada task, con un `<div>` con diferentes níveles `<h1> -- <h5>` y um propTypes que va tener diferencias intancias de los props

TASK_LIST.JSX: tiene una tarea por defalt(padrão)

