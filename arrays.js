let arrays = ["java", "angular", "react", "html"];

arrays.length = 10;
arrays[8] = "typescript"
// console.log(arrays);
let devOps = " ";
let i = 0;
let learners = new Array(3);

learners[0] = 1;
learners[1] = 2;
learners[2] = 3;
// learners[0] = 1;

console.log(learners.toString());
for (;i< arrays.length;){
    devOps += arrays[i] + "\n";
    console.log(devOps)
    i++
    };