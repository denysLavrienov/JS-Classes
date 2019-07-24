import {Animal} from "../.";

/**
 * Describes an animal belonging to the species Parrot.
 */
export class Parrot extends Animal {
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
     * @returns {boolean} can parrot fly?
     */
    canFly() {
        return true;
    }

    /**
     *
     * @returns {boolean} can parrot run?
     */
    canRun() {
        return false;
    }

    /**
     *
     * @returns {boolean} can pig swim?
     */
    canSwim() {
        return false;
    }

    /**
     *
     * @returns {boolean} can parrot eat another animal?
     */
    eats(Animal) {
        return this.vegetarian;
    }

}