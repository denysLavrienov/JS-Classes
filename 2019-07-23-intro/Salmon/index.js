import {Animal} from "../animal";

/**
 * Describes an animal belonging to the species Salmon.
 */
export class Salmon extends Animal {
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
     * @returns {boolean} can salmon fly?
     */
    canFly() {
        return false;
    }

    /**
     *
     * @returns {boolean} can salmon run?
     */
    canRun() {
        return false;
    }

    /**
     *
     * @returns {boolean} can salmon swim?
     */
    canSwim() {
        return true;
    }

    /**
     *
     * @returns {boolean} can salmon eat another animal?
     */
    eats(Animal) {
        return this.vegetarian;
    }

}