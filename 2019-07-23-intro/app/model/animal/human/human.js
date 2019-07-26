import {Animal} from "../animal.js";

/**
 * Describes an animal belonging to the _species Human.
 */
export class Human extends Animal {
    /**
     * Gets a description of the animal as parameters.
     * @param {string} species - species of animal.
     * @param {Number} numberOfLegs - the number of paws of the animal.
     * @param {boolean} vegetarian - animal is vegetarian or not.
     */
    constructor(species, numberOfLegs, vegetarian) {
        if (numberOfLegs !== 2) {
            throw new Error("Wrong legs amount for human.");
        }
        if (vegetarian !== false) {
            throw new Error("Wrong kind of heterotrophy for human.");
        }
        super(species, numberOfLegs, vegetarian);
    }


    /**
     *
     * @returns {boolean} defines human`s ability to run.
     */
    canRun() {
        return true;
    }

    /**
     *
     * @returns {boolean} defines human`s ability to swim.
     */
    canSwim() {
        return true;
    }

    /**
     *
     * @returns {boolean} defines human`s ability to eat another animal.
     */
    eats(animal) {
        return !this._vegetarian && animal.habitat() === "Ground";
    }

    /**
     *
     * @returns {string} habitat of human.
     */
    habitat() {
        return "Ground";
    }

}