import {Animal} from "../animal";

export class Parrot extends Animal{
    constructor(species, numberOfLegs, vegetarian){
        super(species, numberOfLegs, vegetarian);
    }

    canFly(){
        return true;
    }

    canRun(){
        return false;
    }

    canSwim(){
        return false;
    }

    eats(Animal){
        return this.vegetarian;
    }

}