import {SelectFieldCreator} from "./selectFieldCreator.js";
import {AnimalFactory} from "./animalfactory.js";
import {Button} from "./button.js";

export class Form {
    constructor(root, animalList, eatabilityList) {
        this.root = root;
        this.animalList = animalList;
        this.eatabilityList = eatabilityList;
        this.render();
    }

    render() {

        let input = document.createElement("input");
        input.placeholder = "Name";
        input.style.marginRight = "50px";
        this.root.appendChild(input);

        const select = new SelectFieldCreator().createSelect();
        this.root.appendChild(select);

        let animals = [];

        let addButton = new Button("Add animal").createButton();
        addButton.addEventListener("click", () => {

            let selectedAnimal = select.options[select.selectedIndex].textContent;
            let animal = new AnimalFactory().getAnimal(selectedAnimal);

            let listElement = document.createElement("li");
            listElement.id = selectedAnimal;

            listElement.innerHTML = `Animal class: ${selectedAnimal}
                            <p>Animal name: ${input.value}
                            <p>Animal can run? ${animal.canRun()}
                            <p>Animal can swim? ${animal.canSwim()}
                            <p>Animal can fly? ${animal.canFly()}`;

            this.animalList.appendChild(listElement);
            animals.push(listElement);
            input.value = "";
        });

        let displayButton = new Button("Display eatability list").createButton();
        displayButton.addEventListener("click", () => {

            const animal = this.animalList.childNodes[0];
            const item = document.createElement("li");
            let eatability = "";
            let sign = false;
            const animalFactory = new AnimalFactory();

            const promise = new Promise((resolve, reject) => {
                item.innerHTML = "Loading...";

                setTimeout(() => {
                    if(this.animalList.childNodes.length>0) {
                        resolve();
                    } else {
                        reject();
                    }

                }, 2000);
            });

            promise.then(() => {
                let j = 0;
                for (; j < animals.length; j++) {

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
                    animals.splice(j--, 1);
                }
                item.innerHTML = animal.id + " can eat: " + eatability;
            });

            promise.catch(()=>{
                item.innerHTML = "No animals left";
            });

            this.eatabilityList.appendChild(item);

        });

        this.root.appendChild(addButton);
        this.root.appendChild(displayButton);
    }
}