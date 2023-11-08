import Citizen from './citizen';

let citi = new Citizen()
citi.addAddress('Jozi');
let pers = new Citizen('Peter', 0o0000000000000)
console.log(pers, citi.address);