class ClickHandler {
    constructor() {
        let main = document.getElementById("main");
        let btn1 = document.getElementById("btn1");
        let btn2 = document.getElementById("btn2");

        if (main !== null && btn1 !== null && btn2 !== null) {
            main.addEventListener("click", ClickHandler.alertEventMain, false);
            btn1.addEventListener("click", ClickHandler.alertEventBtn1, true);
            btn2.addEventListener("click", ClickHandler.alertEventBtn2, true);
        }
    }
    //Events, Capturing and Bubbling
    static alertEventMain(): void {
        alert("Clicked over main");
    }

    static alertEventBtn1(event:any): void {
        alert("Clicked over btn1");
        event.stopPropagation();
    }

    static alertEventBtn2(event:any): void {
        alert("Clicked over btn2");
        event.stopPropagation();
    }
}
const clickHandler = new ClickHandler();