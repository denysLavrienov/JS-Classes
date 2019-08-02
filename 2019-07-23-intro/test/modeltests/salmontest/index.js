import {Salmon} from "../../../app/model/animal/fishes/salmon.js";
import {Pig} from "../../../app/model/animal/mammals/pig.js";

const salmon = new Salmon("Salmon", 0, true);

export default function () {
    QUnit.module("Salmon tests.");

    QUnit.test("Salmon fly test.", function (assert) {
        assert.ok(salmon.canFly() === false, "Passed");
    });
    QUnit.test("Salmon swim test.", function (assert) {
        assert.ok(salmon.canSwim() === true, "Passed");
    });
    QUnit.test("Salmon run test.", function (assert) {
        assert.ok(salmon.canRun() === false, "Passed");
    });
    QUnit.test("Salmon eat pig test.", function (assert) {
        assert.ok(salmon.eats(new Pig("Boar", 4, false)) === false, "Passed");
    });
    QUnit.test("Salmon habitat test.", function (assert) {
        assert.ok(salmon.habitat() === "Water", "Passed");
    });
}