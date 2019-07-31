export class TableCreator{

    constructor(select, animalFactory, root){
        this.select = select;
        this.animalFactory = animalFactory;
        this.root = root;
    }

    createTable() {
        let table = document.createElement("table");
        table.style.border = "1px solid black";

        this.root.appendChild(table);

        let topRow = document.createElement("tr");
        let td = document.createElement("td");

        td.innerHTML = "    ";

        topRow.appendChild(td);

        for (let i = 0; i < this.select.options.length; i++) {

            let animalName = document.createElement("td");
            animalName.innerHTML = this.select.options[i].value;

            topRow.appendChild(animalName);
        }

        table.appendChild(topRow);

        for (let i = 0; i < this.select.options.length; i++) {

            let row = document.createElement("tr");
            let animal = document.createElement("td");

            animal.innerHTML = "" + this.select.options[i].value;

            row.appendChild(animal);

            for (let j = 0; j < this.select.options.length; j++) {

                let td = document.createElement("td");

                td.innerHTML = "" + this.animalFactory.getAnimal(this.select.options[i].value)
                    .eats(this.animalFactory.getAnimal(this.select.options[j].value));

                row.appendChild(td);
            }

            table.appendChild(row);
        }
    }
}