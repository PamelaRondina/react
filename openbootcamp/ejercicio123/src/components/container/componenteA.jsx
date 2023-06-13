import React from 'react';
import { Task } from '../../models/task.class';
import ComponenteB from '../pure/ComponenteB';

const ComponenteA = () => {

    const defaultTask = new Task('Pamela', 'Rondina', 'pamela.rondina@gmail.com', false);

    return (
        <div>
            <div>
                <h1>
                    Contacto
                </h1> 
            </div>
            {/* TODO: Aplicar un For/Map para renderizar una lista de tareas*/}
            <ComponenteB task={defaultTask}></ComponenteB>
        </div>
    );
};

export default ComponenteA;
