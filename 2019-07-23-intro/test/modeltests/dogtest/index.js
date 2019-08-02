import {Dog} from "../../../app/model/animal/mammals/dog.js";
import {Cat} from "../../../app/model/animal/mammals/cat.js";

export default function () {
    const dog = new Dog("Shepherd", 4, false);

    QUnit.module("Dog tests.");

    QUnit.test("Dog fly test.", function (assert) {
        assert.ok(dog.canFly() === false, "Should return false for dog fly test.");
    });
    QUnit.test("Dog swim test.", function (assert) {
        assert.ok(dog.canSwim() === true, "Should return true for dog swim test.");
    });
    QUnit.test("Dog run test.", function (assert) {
        assert.ok(dog.canRun() === true, "Should return true for dog run test.");
    });
    QUnit.test("Dog eat cat test.", function (assert) {
        assert.ok(dog.eats(new Cat("British", 4, false)) === true, "Should return true for dog eat pig test.");
    });
    QUnit.test("Dog habitat test.", function (assert) {
        assert.ok(dog.habitat() === "Ground", "Should return Ground for dog habitat test.");
    });
}