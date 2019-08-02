import {Form} from "./form.js";
import {List} from "./list.js";

export class Application {
    constructor(root) {
        this.root = root;
        this.render(root);
    }

    render() {

        let form = document.createElement("div");
        this.root.appendChild(form);

        let animalList = new List("AnimalList").createList();
        let eatabilityList = new List("EatabilityList").createList();
        this.root.appendChild(animalList);
        this.root.appendChild(eatabilityList);

        new Form(form);
    }
}

