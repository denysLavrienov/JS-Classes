import {SelectFieldCreator} from "./selectFieldCreator.js";
import {AnimalFactory} from "./animalfactory.js";
import {Button} from "./button.js";
import {Input} from "./input.js";

export class Form {
    constructor(root) {
        this.root = root;
        this.render();
    }

    render() {

        const input = new Input().createInput();
        this.root.appendChild(input);

        const select = new SelectFieldCreator().createSelect();
        this.root.appendChild(select);

        const animals = [];
        const animalList = document.getElementById("AnimalList");
        const eatabilityList = document.getElementById("EatabilityList");

        const addButton = new Button("Add animal").createButton();
        addButton.addEventListener("click", () => {

            let selectedAnimal = select.options[select.selectedIndex].textContent;
            let animal = new AnimalFactory().getAnimal(selectedAnimal);

            let listElement = document.createElement("li");
            listElement.id = selectedAnimal;

            listElement.innerHTML = `Animal's class: ${selectedAnimal}
                                    <br/>Animal's name: ${input.value}
                                    <br/>Animal can run? ${animal.canRun()}
                                    <br/>Animal can swim? ${animal.canSwim()}
                                    <br/>Animal can fly? ${animal.canFly()}`;
            listElement.style.marginTop = "10px";

            animalList.appendChild(listElement);
            animals.push(listElement);
            input.value = "";
        });

        const displayButton = new Button("Display eatability list").createButton();
        displayButton.addEventListener("click", () => {

            const animal = animals[0];
            const item = document.createElement("li");
            let eatability = "";
            let sign = false;
            const animalFactory = new AnimalFactory();

            const promise = new Promise((resolve, reject) => {
                item.innerHTML = "Loading...";

                setTimeout(() => {
                    if (animals.length > 0) {
                        resolve();
                    } else {
                        reject(new Error("No animals left"));
                    }
                }, 2000);
            });

            promise.then(() => {
                for (let j = 0; j < animals.length; j++) {

                    let eatabilityResult = animalFactory.getAnimal(animal.id)
                        .eats(animalFactory.getAnimal(animals[j].id));

                    if (eatabilityResult) {
                        if (j < (animals.length - 1)) {
                            eatability += animals[j].id + ", ";
                        } else {
                            eatability += animals[j].id;
                        }
                        animals.splice(j--, 1);
                        sign = true;
                    }
                }
                if (!sign) {
                    animals.splice(0, 1);
                }
                item.innerHTML = animal.id + " can eat: " + eatability;
            }, error => {
                item.innerHTML = error.message;
                item.style.listStyle = "none";
            });

            eatabilityList.appendChild(item);
        });

        this.root.appendChild(addButton);
        this.root.appendChild(displayButton);
    }
}