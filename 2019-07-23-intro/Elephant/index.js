import {Animal} from "../animal";

export class Elephant extends Animal{
    constructor(species, numberOfLegs, vegetarian){
        super(species, numberOfLegs, vegetarian);
    }

    canFly(){
        return false;
    }

    canRun(){
        return true;
    }

    canSwim(){
        return false;
    }

    eats(Animal){
        return this.vegetarian;
    }

}