export class Button{
    constructor(name){
        this.name = name;
    }



    createButton(){
        let button = document.createElement("button");

        button.textContent = this.name;
        button.style.marginLeft = "50px";

        return button;

    }
}