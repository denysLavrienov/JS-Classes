import {Form} from "./form.js";
import {List} from "./list.js";

export class Application {
    constructor(root) {
        this.root = root;
        this.render(root);
    }

    render() {

        const form = document.createElement("div");
        form.id = "form";
        this.root.appendChild(form);

        const animalList = new List("AnimalList").createList();
        const eatabilityList = new List("EatabilityList").createList();
        this.root.appendChild(animalList);
        this.root.appendChild(eatabilityList);

        new Form(form);
    }
}

