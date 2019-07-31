import {Mammal} from "./mammal.js";

/**
 * Describes an animal belonging to the _species Pig.
 */
export class Pig extends Mammal {
    /**
     * Gets a description of the animal as parameters.
     * @param {string} species - species of animal.
     * @param {boolean} vegetarian - animal is vegetarian or not.
     */
    constructor(species, vegetarian) {
        if (vegetarian !== false) {
            throw new Error("Wrong kind of heterotrophy for pig.");
        }
        super(species, vegetarian);
    }

    /**
     *
     * @returns {boolean} defines pig`s ability to eat another animal.
     */
    eats(animal) {
        return !this._vegetarian && animal.habitat() === "Ground";
    }

}