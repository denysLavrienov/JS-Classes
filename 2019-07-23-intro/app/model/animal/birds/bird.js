import {Animal} from "../animal.js";

/**
 * Stands for abstract bird.
 */
export class Bird extends Animal {
    /**
     * Gets a description of the animal as parameters.
     * @param {string} species - species of animal.
     * @param {Number} numberOfLegs - the number of paws of the animal.
     * @param {boolean} vegetarian - animal is vegetarian or not.
     */
    constructor(species, numberOfLegs, vegetarian) {
        if (numberOfLegs !== 2) {
            throw new Error("Wrong legs amount for bird.");
        }
        super(species, numberOfLegs, vegetarian);
    }

    /**
     *
     * @returns {boolean} defines bird`s ability to fly.
     */
    canFly() {
        return true;
    }

    /**
     *
     * @returns {boolean} defines bird`s ability to run.
     */
    canRun() {
        return false;
    }

    /**
     *
     * @returns {boolean} defines bird`s ability to swim.
     */
    canSwim() {
        return false;
    }

    /**
     *
     * @returns {string} habitat of bird.
     */
    habitat() {
        return "Air";
    }

}