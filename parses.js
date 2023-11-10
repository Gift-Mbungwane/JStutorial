const myDetails = {
    "name": "gift",
    "surname": "mbungwane",
    "course": "computer Science"
}

const myD = {
    "name": "Fift",
    "surname": "mbug",
    "course": "computer with no name"
}


// const data = JSON.parse(myDetails);
// console.log(data);

// const data2 = JSON.stringify(myDetails);
// console.log(data2.toLocaleUpperCase());


const fs = require('fs');

// fs.writeFile("./student.json", myDetails, (callback) => {
//     if(callback) {
//         console.log(callback)
//     } else {
//         console.log("success");
//     }
// })

// fs.appendFile("./student.json", myD, (callback) => {
//     if(callback) {
//         console.log(callback)
//     } else {
//         console.log("success2");
//     }
// })

function writeData(){
    fs.readFile('./student.json','binary', (err,jsonString) => {
        if(err){
            console.log(err)
        }
        else{
            let obj = JSON.parse(jsonString);
            console.log(obj, "  this the object already we have")
            obj.students.push(myD);
            console.log(obj, "  this is after pushing")
            fs.writeFileSync("./student.json", JSON.stringify(obj));

        }
    }
    );
}

writeData();

