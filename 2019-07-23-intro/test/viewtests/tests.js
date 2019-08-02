import {Application} from "../../app/view/application.js";
import {Button} from "../../app/view/button.js";
import {Input} from "../../app/view/input.js";
import {Form} from "../../app/view/form.js";
import {SelectFieldCreator} from "../../app/view/selectFieldCreator.js";

QUnit.module("Integration tests", {
    beforeEach : function () {
        const root = document.getElementById("qunit-fixture");
        new Application(root);
        const checkButton = document.getElementById("Display eatability list");
        const addButton = document.getElementById("Add animal");
        const machineEvent = new Event('click', {bubbles : true});

        addButton.dispatchEvent(machineEvent);
        checkButton.dispatchEvent(machineEvent);
        // button.click(); //simpler variant
    }
});

QUnit.test("Test add animal.", (assert) => {
    const list = document.getElementById("AnimalList");
    assert.equal(list.childNodes.length, 1,
        "Should contain 1 child node with animal Cat.");
});

QUnit.test("Test eat animal.", (assert) => {
    const list = document.getElementById("EatabilityList");
    assert.equal(list.childNodes.length, 1,
        "Should contain 1 child node with 'Cat can eat: Cat'.");
});

QUnit.test("Test check eatability twice after one animal added.", (assert) => {
    const list = document.getElementById("EatabilityList");
    const checkButton = document.getElementById("Display eatability list");
    const machineEvent = new Event('click', {bubbles : true});
    checkButton.dispatchEvent(machineEvent);

    assert.equal(list.childNodes.length, 2,
        "Should contain 2 child nodes with 'Cat can eat: Cat' and 'No animals left'.");

    setTimeout(() => {
            assert.equal(list.childNodes[1].innerHTML, "No animals left");
        },
        3000);
});

QUnit.module("Button tests");
QUnit.test("Test create button.", (assert) => {
    const addButton = new Button("Add animal").createButton();
    assert.equal(addButton.id, "Add animal", "Should contain 'Add animal' id.");
});

QUnit.module("Input tests");
QUnit.test("Test create input.", (assert) => {
    const input = Input.createInput();
    assert.equal(input.placeholder, "Name", "Should contain 'Name' placeholder.");
});
QUnit.module("Form tests");
QUnit.test("Test create form.", (assert) => {
    const root = document.createElement("form");
    new Form(root);

    assert.equal(root.childNodes.length, 4, "Should contain 4 child nodes.");
});

QUnit.module("Select option tests");
QUnit.test("Test create select option.", (assert) => {
    const select = document.createElement("select");
    new SelectFieldCreator().addOption("Option text", select);

    assert.equal(select.childNodes.length, 1, "Should contain 1 child nodes.");
});


