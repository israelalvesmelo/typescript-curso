let nameAge = new Map<string, number>();
nameAge.set("Gon", 1);
nameAge.set("Killua", 4);
nameAge.set("Killua", 23);
console.log(nameAge);

let nameAge2 = new Map<string, number>().set("Gon", 1).set("Robson", 1);
console.log(nameAge2);

let animeEisodes = new Map<string,number>([
    ["DBZ", 200], ["FullMatal",64]
]);
console.log(animeEisodes);

for (let key of animeEisodes.keys()){
    console.log(key);
}
for (let value of animeEisodes.values()){
    console.log(value);
}
for (let entry of animeEisodes.entries()){
    console.log(`${entry[0]} || ${entry[1]}`);
}
for (let [key, value] of animeEisodes.entries()){
    console.log(`${key} || ${value}`);
}
animeEisodes.clear();
console.log(animeEisodes);