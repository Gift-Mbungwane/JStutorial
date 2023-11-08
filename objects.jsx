const school = {
    name : "Secunda Secondary School",
    location: "Mpumalanga",
    establish: "1982",
    20: 0o000,

        displayInfo: function () {
                console.log(`Welcome to ${this.name}
                 located at ${this.location} 
                 ehich was establish ${this.establish} 
                 having rating of ${this[20]}`)
        }


}

school.displayInfo()