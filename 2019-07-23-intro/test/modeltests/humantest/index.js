import {Human} from "../../../app/model/animal/human/human.js";
import {Pig} from "../../../app/model/animal/mammals/pig.js";

const human = new Human("Negroid", 2, false);

export default function () {
    QUnit.module("Human tests.");

    QUnit.test("Human fly test.", function (assert) {
        assert.ok(human.canFly() === false, "Passed");
    });
    QUnit.test("Human swim test.", function (assert) {
        assert.ok(human.canSwim() === true, "Passed");
    });
    QUnit.test("Human run test.", function (assert) {
        assert.ok(human.canRun() === true, "Passed");
    });
    QUnit.test("Human eat pig test.", function (assert) {
        assert.ok(human.eats(new Pig("Boar", 4, false)) === true, "Passed");
    });
    QUnit.test("Human habitat test.", function (assert) {
        assert.ok(human.habitat() === "Ground", "Passed");
    });
}