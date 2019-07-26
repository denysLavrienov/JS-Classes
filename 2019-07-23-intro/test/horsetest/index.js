import {Horse} from "../../app/model/animal/mammals/horse.js";
import {Pig} from "../../app/model/animal/mammals/pig.js";

const horse = new Horse("Pony", 4, true);

export default function () {
    QUnit.module("Horse tests.");

    QUnit.test("Horse fly test.", function (assert) {
        assert.ok(horse.canFly() === false, "Passed");
    });
    QUnit.test("Horse swim test.", function (assert) {
        assert.ok(horse.canSwim() === false, "Passed");
    });
    QUnit.test("Horse run test.", function (assert) {
        assert.ok(horse.canRun() === true, "Passed");
    });
    QUnit.test("Horse eat pig test.", function (assert) {
        assert.ok(horse.eats(new Pig("Boar", 4, false)) === false, "Passed");
    });
    QUnit.test("Horse habitat test.", function (assert) {
        assert.ok(horse.habitat() === "Ground", "Passed");
    });
}