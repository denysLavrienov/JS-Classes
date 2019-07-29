export class SelectFieldCreator {
    constructor(select) {
        this.createSelect(select);
    }

    createSelect(select) {

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

    }
}