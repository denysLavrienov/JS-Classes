import {Bird} from "./bird.js";

/**
 * Describes an animal belonging to the _species Parrot.
 */
export class Parrot extends Bird {
    /**
     * Gets a description of the animal as parameters.
     * @param {boolean} vegetarian - animal is vegetarian or not.
     */
    constructor(vegetarian) {
        if (vegetarian === false) {
            throw new Error("Wrong kind of heterotrophy for parrot.");
        }
        super("Parrot", 2, vegetarian);
    }

    /**
     *
     * @returns {boolean} defines parrot`s ability to eat another animal.
     */
    eats(animal) {
        return !this._vegetarian;
    }

}