import {Lion} from "../../app/model/animal/mammals/lion.js";
import {Pig} from "../../app/model/animal/mammals/pig.js";

const lion = new Lion("Asiatic lion",  false);

export default function () {
    QUnit.module("Lion tests.");

    QUnit.test("Lion fly test.", function (assert) {
        assert.ok(lion.canFly() === false, "Passed");
    });
    QUnit.test("Lion swim test.", function (assert) {
        assert.ok(lion.canSwim() === true, "Passed");
    });
    QUnit.test("Lion run test.", function (assert) {
        assert.ok(lion.canRun() === true, "Passed");
    });
    QUnit.test("Lion eat pig test.", function (assert) {
        assert.ok(lion.eats(new Pig("Boar",  false)) === true, "Passed");
    });
    QUnit.test("Lion habitat test.", function (assert) {
        assert.ok(lion.habitat() === "Ground", "Passed");
    });
}
