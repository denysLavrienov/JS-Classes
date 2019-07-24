import {Animal} from "../animal";

export class Pig extends Animal{
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