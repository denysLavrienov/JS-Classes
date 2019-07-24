import {Animal} from "../animal";

/**
 * Describes an animal belonging to the species Elephant.
 */
export class Elephant extends Animal {
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
     * @returns {boolean} can elephant fly?
     */
    canFly() {
        return false;
    }

    /**
     *
     * @returns {boolean} can elephant run?
     */
    canRun() {
        return true;
    }

    /**
     *
     * @returns {boolean} can elephant swim?
     */
    canSwim() {
        return false;
    }

    /**
     *
     * @returns {boolean} can elephant eat another animal?
     */
    eats(Animal) {
        return this.vegetarian;
    }

}