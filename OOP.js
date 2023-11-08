const student = {
   firstName: "first",
   lastName: "last",
   age: 81,
   contact: 0o00720000000,

   setfirstName(first) {
    this.firstName = first;
   },

   setlastName(last) {
    this.lastName = last;
   },

   getfirstName() {
    return this.firstName;
   },

   getlastName() {
    return this.firstName;
   },

   getDetails() {
        return [this.firstName, this.lastName, this.age ,this.contact];
   },

}


console.log(student.getDetails())


  







