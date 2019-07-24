import {Animal} from "../animal";

/**
 * Describes an animal belonging to the species Cat.
 */
export class Cat extends Animal {
    /**
     * Gets a description of the animal as parameters.
     * @param {string} species - species of animal.
     * @param {Number} numberOfLegs - the number of paws of the animal.
     * @param {boolean} vegetarian - animal s vegetarian or not.
     */
    constructor(species, numberOfLegs, vegetarian) {
        super(species, numberOfLegs, vegetarian);
    }

    /**
     *
     * @returns {boolean} can cat fly?
     */
    canFly() {
        return false;
    }

    /**
     *
     * @returns {boolean} can cat run?
     */
    canRun() {
        return true;
    }

    /**
     *
     * @returns {boolean} can cat swim?
     */
    canSwim() {
        return true;
    }

    /**
     *
     * @returns {boolean} can cat eat another animal?
     */
    eats(Animal) {
        return !this.vegetarian;
    }

}