import {Mammal} from "./mammal.js";

/**
 * Describes an animal belonging to the _species Tiger.
 */
export class Tiger extends Mammal {
    /**
     * Gets a description of the animal as parameters.
     * @param {string} species - species of animal.
     * @param {Number} numberOfLegs - the number of paws of the animal.
     * @param {boolean} vegetarian - animal is vegetarian or not.
     */
    constructor(species, numberOfLegs, vegetarian) {
        if (vegetarian !== false) {
            throw new Error("Wrong kind of heterotrophy for tiger.");
        }
        super(species, numberOfLegs, vegetarian);
    }

    /**
     *
     * @returns {boolean} defines tiger`s ability to eat another animal.
     */
    eats(animal) {
        return !this._vegetarian && animal.habitat() === "Ground";
    }

}