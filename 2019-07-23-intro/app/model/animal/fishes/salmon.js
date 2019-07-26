import {Animal} from "../animal.js";

/**
 * Describes an animal belonging to the _species Salmon.
 */
export class Salmon extends Animal {
    /**
     * Gets a description of the animal as parameters.
     * @param {string} species - species of animal.
     * @param {Number} numberOfLegs - the number of paws of the animal.
     * @param {boolean} vegetarian - animal is vegetarian or not.
     */
    constructor(species, numberOfLegs, vegetarian) {
        if (numberOfLegs !== 0) {
            throw new Error("Wrong legs amount for salmon.");
        }
        if (vegetarian === false) {
            throw new Error("Wrong kind of heterotrophy for salmon.");
        }
        super(species, numberOfLegs, vegetarian);
    }

    /**
     *
     * @returns {boolean} defines salmon`s ability to swim.
     */
    canSwim() {
        return true;
    }

    /**
     *
     * @returns {boolean} defines salmon`s ability to eat another animal.
     */
    eats(animal) {
        return this._vegetarian && animal.habitat() === "Water";
    }

    /**
     *
     * @returns {string} habitat of salmon.
     */
    habitat() {
        return "Water";
    }

}