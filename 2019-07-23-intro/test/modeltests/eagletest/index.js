import {Eagle} from "../../../app/model/animal/birds/eagle.js";
import {Pig} from "../../../app/model/animal/mammals/pig.js";

const eagle = new Eagle(false);

export default function () {
    QUnit.module("Eagle tests.");

    QUnit.test("Eagle fly test.", function (assert) {
        assert.ok(eagle.canFly() === true, "Should return true for eagle fly test.");
    });
    QUnit.test("Eagle swim test.", function (assert) {
        assert.ok(eagle.canSwim() === false, "Should return false eagle cat swim test.");
    });
    QUnit.test("Eagle run test.", function (assert) {
        assert.ok(eagle.canRun() === false, "Should return false eagle cat run test.");
    });
    QUnit.test("Eagle eat pig test.", function (assert) {
        assert.ok(eagle.eats(new Pig("Boar", 4, false)) === true, "Should return true for eagle eat pig test.");
    });
    QUnit.test("Eagle habitat test.", function (assert) {
        assert.ok(eagle.habitat() === "Air", "Should return Air for eagle habitat test.");
    });
}