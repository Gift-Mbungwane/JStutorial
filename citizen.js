export default class Citizen {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.address = this.addAddress;
    }

    set setId(id) {
        this.id = id;
    }
    get getId() {
        return (this.id);
    }
    set setName(name) {
     this.name = name;
    }
    get getName() {
        return (this.name);
    }
    
    addAddress(address) {
        this.address = address;
    }

    get getAddress() {
        return (this.address);
    }

    getDetails(){
      return (`Name of person from this resident is ${this.name}, residing at ${this.id}`);
    }
}