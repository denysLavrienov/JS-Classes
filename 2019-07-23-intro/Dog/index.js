import {Animal} from "../animal";

export class Dog extends Animal{
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
        return true;
    }

    eats(Animal){
        return !this.vegetarian;
    }

}