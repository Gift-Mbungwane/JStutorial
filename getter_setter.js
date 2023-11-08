 firstname :"";
 

function getName() {
    return this.firstname;
    console.log(this.firstname);
}

function setName(userName) {
    
    this.firstname = userName;
}

setName("gift");
console.log(getName());