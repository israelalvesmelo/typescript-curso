let key = "key1";
let key2 = "key2";
console.log(sessionStorage.getItem(key));
console.log(sessionStorage.getItem(key2));
sessionStorage.setItem(key, "valueKey1")
sessionStorage.setItem(key2, "valueKey2")
console.log(sessionStorage.getItem(key));
console.log(sessionStorage.getItem(key2));

for(let i=0; i< sessionStorage.length; i++){
    console.log(sessionStorage.getItem(sessionStorage.key(i)));
}

//sessionStorage.removeItem(key); //To remove one attributes from session
//sessionStorage.clear(); //To remove all attributes from session
console.log("-------------------------")
let key3 = "localStorageKey";
localStorage.setItem(key3, "Trying local storage");

for(let i=0; i< localStorage.length; i++){
    console.log(localStorage.getItem(localStorage.key(i)));
}

//localStorage.removeItem(key); //To remove one attributes from session
//localStorage.clear(); //To remove all attributes from session