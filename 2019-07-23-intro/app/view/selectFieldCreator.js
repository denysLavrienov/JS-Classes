export class SelectFieldCreator {

    addOption(optionText, select) {
        let option = document.createElement("option");
        option.textContent = optionText;
        select.appendChild(option);
    }

    createSelect() {

        let select = document.createElement("select");
        this.addOption("Cat", select);
        this.addOption("Dog", select);
        this.addOption("Eagle", select);
        this.addOption("Elephant", select);
        this.addOption("Horse", select);
        this.addOption("Human", select);
        this.addOption("Lion", select);
        this.addOption("Parrot", select);
        this.addOption("Pig", select);
        this.addOption("Salmon", select);
        this.addOption("Tiger", select);
        return select;
    }
}