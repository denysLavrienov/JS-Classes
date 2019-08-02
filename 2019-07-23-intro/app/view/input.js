export class Input {
    createInput() {
        const input = document.createElement("input");
        input.placeholder = "Name";
        input.style.marginRight = "50px";

        return input;
    }
}