export default class Vehicle {

    constructor(make, name, engine) {
        this.make = make;
        this.name = name;
        this.engine = engine;
    }

    set setDetails(make) {
        this.make = make;
    }

    get getName(){
            return (`The name of the Vehicle is ${this.name}`);
    }
    get getMake(){
        return (`The name of the Vehicle is ${this.make}`);
    }
    get getEngine(){
        return (`The name of the Vehicle is ${this.engine}`);
    }
    get getDetails(){

    }


}

        // let bike = new Vehicle("Kawasaki", "suzuki", "1340c");
        // let car = new Vehicle("yaris", " `toyota", "VVTI");
        // let truck = new Vehicle("Two Tipper","Mercedes Bens", "C63");

        // console.log(bike.getEngine)
        // console.log(`${car.getName} is available for purchase`)
        // console.log(`${truck.getName} is out of service`)

