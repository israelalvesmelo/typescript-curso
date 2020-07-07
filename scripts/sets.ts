let namesSet = new Set<string>();
namesSet.add("Willian");
namesSet.add("DevDojo");
namesSet.add("Curso");
namesSet.add("Curso2").add("Curso3");
let nameSet2 = new Set<string>(["Brenon","Sandy","Wildnei","Robson"]);
console.log(namesSet);
console.log(nameSet2);
console.log(nameSet2.has("Robson"));
for(let aux of nameSet2){
    console.log(aux)
}

nameSet2.forEach(value => console.log(value));