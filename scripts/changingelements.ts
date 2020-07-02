let divMain = <HTMLDivElement> document.getElementById("main");
// divMain.innerHTML = "<span>Curso TypeScript</span>" //Replace all content
// divMain.textContent = "Just text here!" //Replace all content and just text
let newDiv = document.createElement("div");
newDiv.textContent = "TypeScript basic";

// divMain.appendChild(newDiv); //Add element
divMain.insertBefore(newDiv,divMain.firstChild); //Add element on position selected
