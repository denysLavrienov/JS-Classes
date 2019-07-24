import {Bird} from "../";

/**
 * Describes an animal belonging to the species Eagle.
 */
export class Eagle extends Bird {
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
     * @returns {boolean} can eagle fly?
     */
    canFly() {
        return true;
    }

    /**
     *
     * @returns {boolean} can eagle run?
     */
    canRun() {
        return false;
    }

    /**
     *
     * @returns {boolean} can eagle swim?
     */
    canSwim() {
        return false;
    }

    /**
     *
     * @returns {boolean} can eagle eat another animal?
     */
    eats(Animal) {
        return !this.vegetarian;
    }

}