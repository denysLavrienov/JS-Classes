import {Animal} from "../animal.js";

/**
 * Describes an animal belonging mammal.
 */
export class Mammal extends Animal {
    /**
     * Gets a description of the animal as parameters.
     * @param {string} species - species of animal.
     * @param {boolean} vegetarian - animal is vegetarian or not.
     */
    constructor(species, vegetarian) {

        super(species, 4, vegetarian);
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