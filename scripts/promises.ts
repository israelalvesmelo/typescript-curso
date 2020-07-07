let promise = new Promise((resolve, reject) => {
    //Opening the file
    let isOpened: boolean = false;
    if (isOpened) {
        resolve("Opened");
    }
    reject("Not Opened");
});
// promise.then((fromResolve)=>{
//     console.log(fromResolve);
// }).catch(fromReject =>{
//     console.log(fromReject);
// });

function openFile(): Promise<string> {
    return new Promise((resolve, reject) => {
        //Opening the file
        let isOpened: boolean = true;
        if (isOpened) {
            resolve("Opened");
        }
        reject("Not Opened");
    })
}

function readFile(): Promise<string> {
    return new Promise((resolve, reject) => {
        //Opening the file
        let isOpened: boolean = true;
        if (isOpened) {
            resolve("Read");
        }
        reject("Not Read");
    })
}

function deleteFile(): Promise<string> {
    return new Promise((resolve, reject) => {
        //Opening the file
        let isOpened: boolean = true;
        if (isOpened) {
            resolve("Deleted");
        }
        reject("Not Deleted");
    })
}


openFile()
    .then(() => readFile()
        .then(() => deleteFile()
            .then(() => console.log("Everything ok"))
            .catch((fromRejected) => console.log(fromRejected)))
        .catch((fromRejected) => console.log(fromRejected)))
    .catch((fromRejected) => console.log(fromRejected));

Promise.all([openFile(), readFile(), deleteFile()]).then().catch();

Promise.race([openFile(), readFile(), deleteFile()]).then().catch();