import {Elephant} from "../../app/model/animal/mammals/elephant.js";
import {Pig} from "../../app/model/animal/mammals/pig.js";

const elephant = new Elephant("African", 4, true);

export default function () {
    QUnit.module("Elephant tests.");

    QUnit.test("Elephant fly test.", function (assert) {
        assert.ok(elephant.canFly() === false, "Passed");
    });
    QUnit.test("Elephant swim test.", function (assert) {
        assert.ok(elephant.canSwim() === false, "Passed");
    });
    QUnit.test("Elephant run test.", function (assert) {
        assert.ok(elephant.canRun() === true, "Passed");
    });
    QUnit.test("Elephant eat pig test.", function (assert) {
        assert.ok(elephant.eats(new Pig("Boar", 4, false)) === false, "Passed");
    });
    QUnit.test("Elephant habitat test.", function (assert) {
        assert.ok(elephant.habitat() === "Ground", "Passed");
    });
}