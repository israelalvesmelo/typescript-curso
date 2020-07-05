let array = ["DevDojo", "Awesomeness"];
console.log("---------------- for ----------------");
for(let i=0; i<array.length;i++){
    console.log(array[i]);
}
console.log("---------------- for each ----------------");

array.forEach((name)=> {
    console.log(name);
    //Don't can use break, continue and return.
});
let person = {name: "Israel", lastname: "Suane"};

console.log("---------------- for in ----------------");

for (let prop in person){
    console.log(prop);
}
for (let prop in array){
    console.log(prop);
    console.log(typeof (prop));
}
console.log("---------------- for of ----------------");
for (let prop of array){
    console.log(prop);
}
