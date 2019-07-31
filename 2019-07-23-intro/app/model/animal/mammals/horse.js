import {Mammal} from "./mammal.js";

/**
 * Describes an animal belonging to the _species Horse.
 */
export class Horse extends Mammal {
    /**
     * Gets a description of the animal as parameters.
     * @param {string} species - species of animal.
     * @param {boolean} vegetarian - animal is vegetarian or not.
     */
    constructor(species, vegetarian) {
        if (vegetarian === false) {
            throw new Error("Wrong kind of heterotrophy for horse.");
        }
        super(species, vegetarian);
    }

    /**
     *
     * @returns {boolean} defines horse`s ability to swim.
     */
    canSwim() {
        return false;
    }

    /**
     *
     * @returns {boolean} defines horse`s ability to eat another animal.
     */
    eats(animal) {
        return !this._vegetarian;
    }

}