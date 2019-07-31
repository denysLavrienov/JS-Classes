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

function * generator(){
    for (let i = 0; i < list.childNodes.length; i++) {
        yield list.childNodes[i];
    }
}

let listGenerator = generator();

let eatabilityList = document.createElement("ul");
root.appendChild(eatabilityList);

displayButton.addEventListener("click", () => {

    let animal = listGenerator.next().value;

    console.log(animal.class);

    let item = document.createElement("li");

    let eatability = "";

    let childNodes = [].slice.call(list.childNodes);
    for (let j = 0; j < childNodes.length; j++) {

        let eatabilityResult = animalFactory.getAnimal(animal.class)
            .eats(animalFactory.getAnimal(childNodes[j].class));

        if (eatabilityResult) {

            if (j < (childNodes.length - 1)) {
                eatability += childNodes[j].class + ", ";
            } else {
                eatability += childNodes[j].class;
            }


            childNodes.splice(j, 1);
            j--;
            console.log(childNodes.length);
        }
    }

    item.innerHTML = animal.class + " can eat: " + eatability;

    eatabilityList.appendChild(item);

});
