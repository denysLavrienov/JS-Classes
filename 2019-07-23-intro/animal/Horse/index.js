import {Animal} from "../";

/**
 * Describes an animal belonging to the species Horse.
 */
export class Horse extends Animal {
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
     * @returns {boolean} can horse fly?
     */
    canFly() {
        return false;
    }

    /**
     *
     * @returns {boolean} can horse run?
     */
    canRun() {
        return true;
    }

    /**
     *
     * @returns {boolean} can horse swim?
     */
    canSwim() {
        return false;
    }

    /**
     *
     * @returns {boolean} can horse eat another animal?
     */
    eats(Animal) {
        return !this.vegetarian;
    }

}