export class Input {
    static createInput() {
        const input = document.createElement("input");
        input.placeholder = "Name";
        input.style.marginRight = "50px";

        return input;
    }
}