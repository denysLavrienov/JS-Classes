/**
 * Stands for abstract animal,
 * that contains methods to describe behavior and external data about animal.
 */
export class Animal {
    species;

    numberOfLegs;

    vegetarian;

    /**
     * Gets a description of the animal as parameters.
     * @param {string} species - species of animal.
     * @param {Number} numberOfLegs - the number of paws of the animal.
     * @param {boolean} vegetarian - animal s vegetarian or not.
     */
    constructor(species, numberOfLegs, vegetarian) {
        this.species = species;
        this.numberOfLegs = numberOfLegs;
        this.vegetarian = vegetarian;
    }

    /**
     *
     * @returns {boolean} can animal fly?
     */
    canFly() {
        return false;
    }

    /**
     *
     * @returns {boolean} can animal run?
     */
    canRun() {
        return false;
    }

    /**
     *
     * @returns {boolean} can animal swim?
     */
    canSwim() {
        return false;
    }

    /**
     *
     * @returns {boolean} can animal eat another animal?
     */
    eats(Animal) {
        return this.vegetarian;
    }

}