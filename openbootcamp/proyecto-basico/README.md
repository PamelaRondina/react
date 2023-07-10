# OpenBootcamp - React 
<hr>

<details>
<summary>Día 01 - Componentes</summary>

- [Compreendendo a camada React](#)
- [index.html](#)
- [index.js](#)
- [App.js](#)
- [Componentes de Classe](#Greeting)
- [Componentes Funcional - GreetingF.jsx](#GreetingF)

</details>

<hr>

## Compreendendo a camada React 

![image](https://github.com/PamelaRondina/PamelaRondina/assets/108991648/a44f1ecf-bcb8-4053-a26e-5840ad25dbcc)

![image](https://github.com/PamelaRondina/PamelaRondina/assets/108991648/cf87a5aa-20fa-42be-873d-5542bd19d3fe)

<hr>

## index.html

- Título do site;
- Criação do id=’root’ no body.

~~~html
<!DOCTYPE html>
  <head>
...
    <title>React App</title>
  </head>
  
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
~~~

<hr>

## index.js

`React` → Importar biblioteca ‘react’ para criar e manipular componentes
`ReactDOM` → Importar biblioteca ‘react-dom’ para renderizar os componentes React no navegador
`App` → Importar o componente ‘App’  do arquivo ‘App.js’ no diretório atual

~~~js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
~~~

> Arquivo que vai renderizar o id=’root’→ index.html
> Arquivo que vai renderizar App.js → App.js

`const root` → criação de variável root; 
`ReactDom` → biblioteca que interage com o DOM (Document Object Model) que renderiza os componentes do React
`.createRoot` → método do ReactDOM que cria um ponto de partida para renderização do aplicativ
`document.` → busca o arquivo em HTML (index.html)
`getElementById('root')` → método do objeto ‘document’ que procura um elemento no documento com o ID específico, no caso, ‘root’
`root.render` → rendereriza a variável 
`<React.StrictMode>` → Componente especial fornecido pelo React que envolve o componente <App /> que será renderizado
`<App/>` → Componente principal do aplicativo

~~~js
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
~~~

~~~js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
~~~

<hr>

## App.js

`import GreetingF` → importação do componente criado

~~~js
import GreetingF from './components/pure/greetingF';
~~~

`function App` → declarando o componente funcional ‘App’, vai renderizar os componentes criados/
`div | header` →  elemento <div> com classe CSS, um contêiner principal e <header> cabeçalho do apliccativo;

> classes em React recebem NAME = className

`<GreetingF name=’Pamela’>` → renderizar o componente criado, passango a propriedade name com o valor de string ‘Pamela’

~~~js
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />        <GreetingF name='Pamela'/>

      </header>
   </div>
  );
}
~~~

`export default GreetingF` → exporta o componente GreetingF para que possa ser usado em outros lugares do projeto.

~~~js
export default App;
~~~

~~~js
import GreetingF from './components/pure/greetingF';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />        <GreetingF name='Pamela'/>

      </header>
   </div>
  );
}

export default App;
~~~

<hr>

## Componente Funcional - GreetingF

`React, { useState }` → Importar biblioteca ‘react’ para criar e manipular componentes, em conjunto do ´hook - useState’ → permite adicionar estado a componentes funcionais
`PropTypes` → Importar biblioteca ‘PropTypes’ permite definir tipos de propriedades esperadas para o componente

~~~js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
~~~

> Nomes de Componentes em letra maiúscula

`const GreetingF`  → criação de componente ‘GrettingF’ que recebe um objeto ´props´como argumento, que contém as propriedades passadas ao componente

~~~js
const GrettingF = (props) => {
~~~

Variável de estado [ age variável, setAgefunção para atualizar o valor] 

~~~js
const [age, setAge] = useState(29);
~~~

> Em React useStateé um hook que retorna duas posições:
> `age` → variável de estado que armazena o valor atual do estado
> `setAge` → função que permite atualizar o valor de estado

`const birthday` → função que será chamada quando o botão for clicado
`setAge` → função que inclui o valor de age (incluso anteriormente) + 1;
`props.name` → Será informado no arquivo App.js;

~~~js
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

Define os tipos esperados das propriedades do componente. Nesse caso, espera-se que name seja uma string.

~~~js
GrettingF.propTypes = {
    name: PropTypes.string
};
~~~

`export default GrettingF` → exporta o componente GrettingF para que possa ser usado em outros lugares do projeto.

~~~js
export default GreetingF;
~~~

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
GrettingF.propTypes = {
    name: PropTypes.string
};

export default GreetingF;
~~~

![image](https://github.com/PamelaRondina/PamelaRondina/assets/108991648/6c217220-ae21-4807-b628-941dbcfaae8e)

<hr>

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

<hr>








