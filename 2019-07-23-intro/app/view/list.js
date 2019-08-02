export class List {
    constructor(id) {
        this.id = id;
    }

    createList() {
        const list = document.createElement("ol");
        list.id = this.id;
        return list;
    }
}