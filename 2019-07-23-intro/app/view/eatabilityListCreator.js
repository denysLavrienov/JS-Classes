export class EatabilityListCreator {

    constructor(list, animalFactory, root) {
        this.list = list;
        this.animalFactory = animalFactory;
        this.root = root;
    }

    createTable() {

        let eatabilityList = document.createElement("ul");
        eatabilityList.id = "eatability";

        this.root.appendChild(eatabilityList);

        let listItems = this.list.childNodes;

        for (let i = 0; i < listItems.length; i++) {

            let item = document.createElement("li");

            let eatability = "";
            for (let j = 0; j < listItems.length; j++) {

                console.log(listItems[i].class + " " + listItems[j].class);
                let eatabilityResult = this.animalFactory.getAnimal(listItems[i].class)
                    .eats(this.animalFactory.getAnimal(listItems[j].class));

                if (eatabilityResult) {

                    if (j < (listItems.length - 1)) {
                        eatability += listItems[j].class + ", ";
                    } else {
                        eatability += listItems[j].class;
                    }
                }
            }

            item.innerHTML = listItems[i].class + " can eat: " + eatability;


            eatabilityList.appendChild(item);
        }
    }
}