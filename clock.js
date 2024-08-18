function startTime(){
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = chechTime(m);

    document.getElementById('txt').innerHTML = h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
}
function chechTime(i){
    if (i<10) {i = "0" + i};
    return i;
}
let DAYS=document.querySelector("#date");
let weeks=new Date();
DAYS.innerText=weeks.toDateString()