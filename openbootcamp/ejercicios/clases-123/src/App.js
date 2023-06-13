import ComponentA from "./components/ComponentA";

function App() {
    const conexionContacto = {
        nombre: 'Pamela',
        apellido: 'Rondina',
        email: 'pamela@teste.com',
        conectado: false,
    };

    return (
        <div className="App">
            <ComponentA contacto={conexionContacto}/>            
        </div>   
    );
};

export default App;