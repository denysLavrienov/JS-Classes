export class Button {
    constructor(name) {
        this.name = name;
    }


    createButton() {
        const button = document.createElement("button");

        button.textContent = this.name;
        button.style.marginLeft = "50px";
        button.id = this.name;

        return button;

    }
}