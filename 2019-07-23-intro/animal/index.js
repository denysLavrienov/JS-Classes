class Animal {
    species;

    numberOfLegs;

    vegetarian;

    constructor(species, numberOfLegs, vegetarian){
        this.species = species;
        this.numberOfLegs = numberOfLegs;
        this.vegetarian = vegetarian;
    }

    canFly();

    canRun();

    canSwim();

    eats(Animal);

}