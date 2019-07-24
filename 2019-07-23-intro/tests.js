import {Dog} from "./Dog";
import {Eagle} from "./Eagle";
import {Elephant} from "./Elephant";
import {Cat} from "./Cat";
import {Horse} from "./Horse";
import {Human} from "./Human";
import {Lion} from "./Lion";
import {Parrot} from "./Parrot";
import {Pig} from "./Pig";
import {Tiger} from "./Tiger";
import {Salmon} from "./Salmon";

let dog = new Dog("Shepherd", 4, false);
let cat = new Cat("British", 4, false);
let eagle = new Eagle("Golden Eagle", 2, false);
let elephant = new Elephant("African", 4, true);
let horse = new Horse("Pony", 4, true);
let human = new Human("Negroid", 2, false);
let lion = new Lion("Asiatic lion", 4, false);
let parrot = new Parrot("Ara", 2, true);
let pig = new Pig("Boar", 4, false);
let tiger = new Tiger("Amur tiger", 4, false);
let salmon = new Salmon("Salmon", 0, true);

QUnit.test("Dog fly test.", function (assert) {
    assert.ok(dog.canFly() === false, "Passed!");
});

QUnit.test("Dog eats parrot test.", function (assert) {
    assert.ok(dog.eats(parrot) === true, "Passed!");
});

QUnit.test( "Lion eats dog test.", function( assert ) {
    assert.ok(lion.eats(dog) === true, "Passed!" );
});

QUnit.test( "Cat eats salmon test.", function( assert ) {
    assert.ok(cat.eats(salmon) === true, "Passed!" );
});

QUnit.test( "Horse cannot fly.", function( assert ) {
    assert.notOk(horse.canFly() === true, "Passed!" );
});

QUnit.test( "Horse cannot eat lion.", function( assert ) {
    assert.notOk(horse.eats(lion) === true, "Passed!" );
});