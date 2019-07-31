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

        let childNodes = [];

        new Button("Add animal", this.root).render(() => {

            let selectedAnimal = select.options[select.selectedIndex].textContent;
            let animal = new AnimalFactory().getAnimal(selectedAnimal);

            let listElement = document.createElement("li");
            listElement.class = selectedAnimal;

            listElement.innerHTML = `Animal class: ${selectedAnimal}
                            <p>Animal name: ${input.value}
                            <p>Animal can run? ${animal.canRun()}
                            <p>Animal can swim? ${animal.canSwim()}
                            <p>Animal can fly? ${animal.canFly()}`;

            this.animalList.appendChild(listElement);
            childNodes.push(listElement);
            input.value = "";
        });

        new Button("Display eatability table", this.root).render(() => {

            const animal = childNodes[0];
            const item = document.createElement("li");
            let eatability = "";
            let sign = false;
            const animalFactory = new AnimalFactory();
            const promise = new Promise((resolve, reject) => {

                item.innerHTML = "Loading...";

                setTimeout(() => {
                    if(childNodes.length>0) {
                        resolve();
                    } else {
                        reject();
                    }

                }, 2000);
            });

            promise.then(() => {

                for (let j = 0; j < childNodes.length; j++) {

                    let eatabilityResult = animalFactory.getAnimal(animal.class)
                        .eats(animalFactory.getAnimal(childNodes[j].class));

                    if (eatabilityResult) {

                        if (j < (childNodes.length - 1)) {

                            eatability += childNodes[j].class + ", ";
                        } else {
                            eatability += childNodes[j].class;
                        }
                        childNodes.splice(j--, 1);

                        sign = true;
                    }
                }
                if (!sign) {
                    childNodes.splice(0, 1);
                }
                item.innerHTML = animal.class + " can eat: " + eatability;
            });

            promise.catch(()=>{
                item.innerHTML = "No animals left";
            });


            this.eatabilityList.appendChild(item);

        });

    }

}