import {Dog} from "./animal/Dog";
import {Eagle} from "./animal/Bird/Eagle";
import {Elephant} from "./animal/Elephant";
import {Cat} from "./animal/Cat";
import {Horse} from "./animal/Horse";
import {Human} from "./animal/Human";
import {Lion} from "./animal/Lion";
import {Parrot} from "./animal/Parrot";
import {Pig} from "./animal/Pig";
import {Tiger} from "./animal/Tiger";
import {Salmon} from "./animal/Salmon";

const dog = new Dog("Shepherd", 4, false);
const cat = new Cat("British", 4, false);
const eagle = new Eagle("Golden Eagle", 2, false);
const elephant = new Elephant("African", 4, true);
const horse = new Horse("Pony", 4, true);
const human = new Human("Negroid", 2, false);
const lion = new Lion("Asiatic lion", 4, false);
const parrot = new Parrot("Ara", 2, true);
const pig = new Pig("Boar", 4, false);
const tiger = new Tiger("Amur tiger", 4, false);
const salmon = new Salmon("Salmon", 0, true);

QUnit.test("Dog fly test.", function (assert) {
    assert.ok(dog.canFly() === false, "Passed!");
});

QUnit.test("Dog eats parrot test.", function (assert) {
    assert.ok(dog.eats(parrot) === true, "Passed!");
});

QUnit.test("Lion eats dog test.", function (assert) {
    assert.ok(lion.eats(dog) === true, "Passed!");
});

QUnit.test("Cat eats salmon test.", function (assert) {
    assert.ok(cat.eats(salmon) === true, "Passed!");
});

QUnit.test("Horse cannot fly.", function (assert) {
    assert.notOk(horse.canFly() === true, "Passed!");
});

QUnit.test("Horse cannot eat lion.", function (assert) {
    assert.notOk(horse.eats(lion) === true, "Passed!");
});