import {Animal} from "../animal";

/**
 * Describes an animal belonging to the species Pig.
 */
export class Pig extends Animal {
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
     * @returns {boolean} can pig fly?
     */
    canFly() {
        return false;
    }

    /**
     *
     * @returns {boolean} can pig run?
     */
    canRun() {
        return true;
    }

    /**
     *
     * @returns {boolean} can pig swim?
     */
    canSwim() {
        return true;
    }

    /**
     *
     * @returns {boolean} can pig eat another animal?
     */
    eats(Animal) {
        return !this.vegetarian;
    }

}