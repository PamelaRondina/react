import { LEVELS } from "./levels.enum";

export class Task {
    name = '';
    desciption = '';
    completed = false;
    level = LEVELS.NORMAL;

    constructor(name, desciption, completed, level){
        this.name = name;
        this.desciption = desciption;
        this.completed = completed;
        this.level = level;
    }
} 