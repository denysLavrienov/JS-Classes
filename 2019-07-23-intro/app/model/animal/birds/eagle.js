import {Bird} from "./bird.js";

/**
 * Describes an animal belonging to the _species Eagle.
 */
export class Eagle extends Bird {
    /**
     * Gets a description of the animal as parameters.
     * @param {boolean} vegetarian - animal is vegetarian or not.
     */
    constructor(vegetarian){
        if (vegetarian !== false) {
            throw new Error("Wrong kind of heterotrophy for eagle.");
        }
        super("Eagle", 2, vegetarian);
    }

    /**
     *
     * @returns {boolean} defines eagle`s ability to eat another animal.
     */
    eats(animal) {
        return !this._vegetarian && animal.habitat() === "Ground";
    }

}