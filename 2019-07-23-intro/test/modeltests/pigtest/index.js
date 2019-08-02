import {Pig} from "../../../app/model/animal/mammals/pig.js";

const pig = new Pig("Boar", 4, false);

export default function () {
    QUnit.module("Pig tests.");

    QUnit.test("Pig fly test.", function (assert) {
        assert.ok(pig.canFly() === false, "Passed");
    });
    QUnit.test("Pig swim test.", function (assert) {
        assert.ok(pig.canSwim() === true, "Passed");
    });
    QUnit.test("Pig run test.", function (assert) {
        assert.ok(pig.canRun() === true, "Passed");
    });
    QUnit.test("Pig eat pig test.", function (assert) {
        assert.ok(pig.eats(new Pig("Boar", 4, false)) === true, "Passed");
    });
    QUnit.test("Pig habitat test.", function (assert) {
        assert.ok(pig.habitat() === "Ground", "Passed");
    });
}