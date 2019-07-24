import {Animal} from "../animal";

/**
 * Stands for abstract bird.
 */
export class Bird extends Animal {
    /**
     * Gets a description of the animal as parameters.
     * @param {string} species - species of animal.
     * @param {Number} numberOfLegs - the number of paws of the animal.
     * @param {boolean} vegetarian - animal s vegetarian or not.
     */
    constructor(species, numberOfLegs, vegetarian) {
        super(species, numberOfLegs, vegetarian);
    }

    /**
     *
     * @returns {boolean} can bird fly?
     */
    canFly() {
        return true;
    }

    /**
     *
     * @returns {boolean} can bird run?
     */
    canRun() {
        return false;
    }

    /**
     *
     * @returns {boolean} can bird run?
     */
    canSwim() {
        return false;
    }

    /**
     *
     * @returns {boolean} can bird run?
     */
    eats(Animal) {
        return !this.vegetarian;
    }

}