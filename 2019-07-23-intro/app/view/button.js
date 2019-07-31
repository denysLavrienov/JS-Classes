export class Button{
    constructor(name, root){
        this.name = name;
        this.root = root;
    }

    render(listener){
        let button = document.createElement("button");

        button.textContent = this.name;
        button.style.marginLeft = "50px";

        button.addEventListener("click", listener);
        this.root.appendChild(button);
    }
}