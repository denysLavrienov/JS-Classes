import {Parrot} from "../../app/model/animal/birds/parrot.js";
import {Pig} from "../../app/model/animal/mammals/pig.js";

const parrot = new Parrot(true);

export default function () {
    QUnit.module("Parrot tests.");

    QUnit.test("Parrot fly test.", function (assert) {
        assert.ok(parrot.canFly() === true, "Passed");
    });
    QUnit.test("Parrot swim test.", function (assert) {
        assert.ok(parrot.canSwim() === false, "Passed");
    });
    QUnit.test("Parrot run test.", function (assert) {
        assert.ok(parrot.canRun() === false, "Passed");
    });
    QUnit.test("Parrot eat pig test.", function (assert) {
        assert.ok(parrot.eats(new Pig("Boar",  false)) === false, "Passed");
    });
    QUnit.test("Parrot habitat test.", function (assert) {
        assert.ok(parrot.habitat() === "Air", "Passed");
    });
}