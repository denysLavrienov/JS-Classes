import {Cat} from "../model/animal/mammals/cat.js";
import {Dog} from "../model/animal/mammals/dog.js";
import {Eagle} from "../model/animal/birds/eagle.js";
import {Elephant} from "../model/animal/mammals/elephant.js";
import {Horse} from "../model/animal/mammals/horse.js";
import {Human} from "../model/animal/human/human.js";
import {Parrot} from "../model/animal/birds/parrot.js";
import {Pig} from "../model/animal/mammals/pig.js";
import {Salmon} from "../model/animal/fishes/salmon.js";
import {Tiger} from "../model/animal/mammals/tiger.js";
import {Lion} from "../model/animal/mammals/lion.js";

export class AnimalFactory{

    constructor() {
        this.map = new Map();
        this.map.set("Cat", new Cat("British", 4, false));
        this.map.set("Dog", new Dog("Shepherd", 4, false));
        this.map.set("Eagle", new Eagle(false));
        this.map.set("Elephant", new Elephant("African", 4, true));
        this.map.set("Horse", new Horse("Pony", 4, true));
        this.map.set("Human", new Human("Negroid", 2, false));
        this.map.set("Lion", new Lion("Asiatic lion", 4, false));
        this.map.set("Parrot", new Parrot(true));
        this.map.set("Pig", new Pig("Boar", 4, false));
        this.map.set("Salmon", new Salmon("Salmon", 0, true));
        this.map.set("Tiger", new Tiger("Amur tiger", 4, false));
    }

    getAnimal(name){
        return this.map.get(name);
    }

}