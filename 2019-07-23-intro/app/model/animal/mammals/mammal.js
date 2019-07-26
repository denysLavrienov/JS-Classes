import {Animal} from "../animal.js";

/**
 * Describes an animal belonging mammal.
 */
export class Mammal extends Animal {
    /**
     * Gets a description of the animal as parameters.
     * @param {string} species - species of animal.
     * @param {Number} numberOfLegs - the number of paws of the animal.
     * @param {boolean} vegetarian - animal is vegetarian or not.
     */
    constructor(species, numberOfLegs, vegetarian) {
        super(species, numberOfLegs, vegetarian);
    }

    /**
     *
     * @returns {boolean} defines mammal`s ability to fly.
     */
    canFly() {
        return false;
    }

    /**
     *
     * @returns {boolean} defines mammal`s ability to run.
     */
    canRun() {
        return true;
    }

    /**
     *
     * @returns {boolean} defines mammal`s ability to swim.
     */
    canSwim() {
        return true;
    }

    /**
     *
     * @returns {string} habitat of mammal.
     */
    habitat() {
        return "Ground";
    }

}