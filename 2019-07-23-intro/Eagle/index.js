import {Bird} from "../Bird";

export class Eagle extends Bird{
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
        return !this.vegetarian;
    }

}