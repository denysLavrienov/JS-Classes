import {AnimalFactory} from "./animalfactory.js";
import {SelectFieldCreator} from "./selectFieldCreator.js";
import {EatabilityListCreator} from "./eatabilityListCreator.js";

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
    listElement.class = selectedAnimal;

    listElement.innerHTML = `Animal class: ${selectedAnimal}
                            <p>Animal name: ${input.value}
                            <p>Animal can run? ${animal.canRun()}
                            <p>Animal can swim? ${animal.canSwim()}
                            <p>Animal can fly? ${animal.canFly()}`;

    list.appendChild(listElement);
    input.value = "";
});

displayButton.addEventListener("click", () => {

        new EatabilityListCreator(list, animalFactory, root).createTable();
    }
);
