export class Animal {
    species;

    numberOfLegs;

    vegetarian;

    constructor(species, numberOfLegs, vegetarian){
        this.species = species;
        this.numberOfLegs = numberOfLegs;
        this.vegetarian = vegetarian;
    }

    canFly(){
        return false;
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