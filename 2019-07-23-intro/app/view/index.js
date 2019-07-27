import {AnimalFactory} from "./animalfactory.js";
import {SelectFieldCreator} from "./selectFieldCreator.js";

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
let animal = undefined;

let list = document.createElement("ol");
root.appendChild(list);

addButton.addEventListener("click", () => {

    let selectedAnimal = select.options[select.selectedIndex].textContent;
    animal = animalFactory.getAnimal(selectedAnimal);

    let listElement = document.createElement("li");
    list.appendChild(listElement);
    listElement.innerHTML = "Animal class: " + selectedAnimal +
        "<p>Animal name: " + input.value +
        "<p>Animal can run? " + animal.canRun() +
        "<p>Animal can swim? " + animal.canSwim() +
        "<p>Animal can fly? " + animal.canFly();

    list.appendChild(listElement);
    console.log(animal.canRun());
});


displayButton.addEventListener("click", () => {
        let table = document.createElement("table");
        table.style.border = "1px solid black";
        root.appendChild(table);
        let topRow = document.createElement("tr");
        let td = document.createElement("td");
        td.innerHTML = "    ";
        topRow.appendChild(td);
        for (let i = 0; i < select.options.length; i++) {
            let animalName = document.createElement("td");
            animalName.innerHTML = select.options[i].value;
            topRow.appendChild(animalName);
        }
        table.appendChild(topRow);

        for (let i = 0; i < select.options.length; i++) {
            let row = document.createElement("tr");
            let animal = document.createElement("td");
            animal.innerHTML = "" + select.options[i].value;
            row.appendChild(animal);

            for (let j = 0; j < select.options.length; j++) {
                let td = document.createElement("td");
                td.innerHTML = "" + animalFactory.getAnimal(select.options[i].value)
                    .eats(animalFactory.getAnimal(select.options[j].value));
                row.appendChild(td);
            }

            table.appendChild(row);
        }
    }
);

