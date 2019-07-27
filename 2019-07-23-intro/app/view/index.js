import {AnimalFactory} from "./animalfactory.js";

const root = document.getElementById("root");
let input = document.createElement("input");

input.placeholder = "Name";
input.style.marginRight = "50px";
root.appendChild(input);

let select = document.createElement("select");


let optionCat = document.createElement("option");
optionCat.textContent = "Cat";

let optionDog = document.createElement("option");
optionDog.textContent = "Dog";

let optionEagle = document.createElement("option");
optionEagle.textContent = "Eagle";

let optionElephant = document.createElement("option");
optionElephant.textContent = "Elephant";

let optionHorse = document.createElement("option");
optionHorse.textContent = "Horse";

let optionHuman = document.createElement("option");
optionHuman.textContent = "Human";

let optionLion = document.createElement("option");
optionLion.textContent = "Lion";

let optionParrot = document.createElement("option");
optionParrot.textContent = "Parrot";

let optionPig = document.createElement("option");
optionPig.textContent = "Pig";

let optionSalmon = document.createElement("option");
optionSalmon.textContent = "Salmon";

let optionTiger = document.createElement("option");
optionTiger.textContent = "Tiger";


select.appendChild(optionCat);

select.appendChild(optionDog);
select.appendChild(optionEagle);
select.appendChild(optionElephant);
select.appendChild(optionHorse);
select.appendChild(optionHuman);
select.appendChild(optionLion);
select.appendChild(optionParrot);
select.appendChild(optionPig);
select.appendChild(optionSalmon);
select.appendChild(optionTiger);
select.selected = optionCat;

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
let animal;

let list = document.createElement("ol");
root.appendChild(list);

addButton.addEventListener("click", event => {

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


displayButton.addEventListener("click", event => {
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

