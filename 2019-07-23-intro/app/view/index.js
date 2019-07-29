import {AnimalFactory} from "./animalfactory.js";
import {SelectFieldCreator} from "./selectFieldCreator.js";
import {TableCreator} from "./tableCreator.js";

const root = document.getElementById("root");
let input = document.createElement("input");

input.placeholder = "Name";
input.style.marginRight = "50px";

root.appendChild(input);

let select = document.createElement("select");

new SelectFieldCreator(select);

root.appendChild(select);

let addButton = document.createElement("button");

addButton.textContent = "Add animal";
addButton.style.marginLeft = "50px";

root.appendChild(addButton);

let displayButton = document.createElement("button");

displayButton.textContent = "Display eatability table";
displayButton.style.marginLeft = "50px";

root.appendChild(displayButton);

let animalFactory = new AnimalFactory();

let list = document.createElement("ol");

root.appendChild(list);

addButton.addEventListener("click", () => {

    let selectedAnimal = select.options[select.selectedIndex].textContent;

    let animal = animalFactory.getAnimal(selectedAnimal);

    let listElement = document.createElement("li");

    list.appendChild(listElement);

    listElement.innerHTML = `Animal class: ${selectedAnimal}
                            <p>Animal name: ${input.value}
                            <p>Animal can run? ${animal.canRun()}
                            <p>Animal can swim? ${animal.canSwim()}
                            <p>Animal can fly? ${animal.canFly()}`;

    list.appendChild(listElement);
});

displayButton.addEventListener("click", () => {

        new TableCreator(select, animalFactory, root).createTable();
    }
);
