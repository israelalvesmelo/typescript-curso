let element = document.getElementById("btn2"); //HTML Element
console.log(element);
let element2 = document.querySelector(".test"); //Element
console.log(element2);
let element3 = <HTMLDivElement> document.querySelector("#main"); //HTMLDivElement
console.log(element3);
let elements = document.getElementsByTagName("div"); //NodeListOf<HTMLDivElement>
console.log(elements);
console.log(elements[3]);
let elements2 = document.querySelectorAll(".test"); //NodeList
console.log(elements2);
console.log(<HTMLButtonElement>elements2[0]);
let elements3 = document.getElementsByName("button"); //NodeListOf<HTMLElement>
console.log(elements3)
