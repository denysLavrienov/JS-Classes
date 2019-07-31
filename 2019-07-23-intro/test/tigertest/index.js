import {Tiger} from "../../app/model/animal/mammals/tiger.js";
import {Pig} from "../../app/model/animal/mammals/pig.js";

export default function () {
    const tiger = new Tiger("Amur tiger",  false);

    QUnit.module("Tiger tests.");

    QUnit.test("Tiger fly test.", function (assert) {
        assert.ok(tiger.canFly() === false, "Passed");
    });
    QUnit.test("Tiger swim test.", function (assert) {
        assert.ok(tiger.canSwim() === true, "Passed");
    });
    QUnit.test("Tiger run test.", function (assert) {
        assert.ok(tiger.canRun() === true, "Passed");
    });
    QUnit.test("Tiger eat pig test.", function (assert) {
        assert.ok(tiger.eats(new Pig("Boar", false)) === true, "Passed");
    });
    QUnit.test("Tiger habitat test.", function (assert) {
        assert.ok(tiger.habitat() === "Ground", "Passed");
    });
}