class AjaxTest{
    // 0 Unintialized, 1 Set up but not sent, 3 in flight, 4 Complete.
    private READY_STATUS_CODE = 4;

    private isCompleted(req:XMLHttpRequest){
        return req.readyState === this.READY_STATUS_CODE;
    }
    public httpGet(url: string, callback: (status: number, response:string) => any):void{
        let req = new XMLHttpRequest();

        req.onreadystatechange = () => {
            let finished = this.isCompleted(req);
            if (finished){
                callback(req.status, req.responseText);
            }
        }

        req.open("GET", url, true);
        req.send();
    }

    public httpPost(url: string, data:string, callback: (status: number, response:string) => any):void{
        let req = new XMLHttpRequest();

        req.onreadystatechange = () => {
            let finished = this.isCompleted(req);
            if (finished){
                callback(req.status, req.responseText);
            }
        }

        req.open("POST", url, true);
        req.setRequestHeader("Content-type", "application/json");
        req.send();
    }
}

let ajaxTest = new AjaxTest();
ajaxTest.httpGet("http://httpbin.org/ip", (status: number, response: string) => {
    let divMain = <HTMLDivElement> document.getElementById("main");
    divMain.innerHTML = response;
});

ajaxTest.httpPost("http://httpbin.org/post", "{name:'Israel', company: 'corporation'}", (status: number, response: string) => {
    let divMain = <HTMLDivElement> document.getElementById("main2");
    divMain.innerHTML = response;
});
