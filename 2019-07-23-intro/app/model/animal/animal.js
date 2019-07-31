/**
 * Stands for abstract animal,
 * that contains methods to describe behavior and external data about animal.
 */
export class Animal {
    _species;

    _numberOfLegs;

    _vegetarian;

    /**
     * Gets a description of the animal as parameters.
     * @param {string} species - species of animal.
     * @param {Number} numberOfLegs - the number of paws of the animal.
     * @param {boolean} vegetarian - animal is vegetarian or not.
     */
    constructor(species, numberOfLegs, vegetarian) {
        this._species = species;
        this._numberOfLegs = numberOfLegs;
        this._vegetarian = vegetarian;
    }

    /**
     *
     * @returns {boolean} defines animal`s ability to fly.
     */
    canFly() {
        return false;
    }

    /**
     *
     * @returns {boolean} defines animal`s ability to run.
     */
    canRun() {
        return false;
    }

    /**
     *
     * @returns {boolean} defines animal`s ability to swim.
     */
    canSwim() {
        return false;
    }

    /**
     *
     * @returns {boolean} defines animal`s ability to eat another animal.
     */
    eats(animal) {
        return animal.habitat() === "The Earth";
    }

    /**
     *
     * @returns {string} habitat of animal.
     */
    habitat() {
        return "The Earth";
    }

}