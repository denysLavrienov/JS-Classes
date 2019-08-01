import {Form} from "./form.js";

export class Application{
    constructor(root) {
        this.root = root;
        this.render(root);
    }

    render(){
        let list = document.createElement("ol");
        let eatabilityList = document.createElement("ul");

        new Form(this.root, list, eatabilityList);

        this.root.appendChild(list);
        this.root.appendChild(eatabilityList);

    }

}

