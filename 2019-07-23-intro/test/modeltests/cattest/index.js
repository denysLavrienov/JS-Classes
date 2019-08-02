import {Cat} from "../../../app/model/animal/mammals/cat.js";
import {Pig} from "../../../app/model/animal/mammals/pig.js";

export default function () {


    const cat = new Cat("British", 4, false);

    QUnit.module("Cat tests.");

    QUnit.test("Cat fly test.", function (assert) {
        assert.ok(cat.canFly() === false, "Should return false for cat fly test.");
    });
    QUnit.test("Cat swim test.", function (assert) {
        assert.ok(cat.canSwim() === true, "Should return true for cat swim test.");
    });
    QUnit.test("Cat run test.", function (assert) {
        assert.ok(cat.canRun() === true, "Should return true for cat run test.");
    });
    QUnit.test("Cat eat pig test.", function (assert) {
        assert.ok(cat.eats(new Pig("Boar", 4, false)) === true,
            "Should return true for cat eat pig test.");
    });
    QUnit.test("Cat habitat test.", function (assert) {
        assert.ok(cat.habitat() === "Ground", "Should return Ground for cat habitat test.");
    });
}