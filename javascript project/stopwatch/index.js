let[seconds,minutes,hours]=[0,0,0]
let timer=null
function stopwatch(){
    let displayt=document.getElementById("stopwatch")
    
    seconds++
    if(seconds==60){
        seconds=0;
        minutes++
        if(minutes==60){
            minutes=0;
            hours++
        }
        }
        let h = hours<10 ?   "0"+hours:hours;
        let m = minutes<10 ? "0"+minutes:minutes;
        let s = seconds<10 ? "0"+seconds:seconds;
        displayt.innerHTML=h+":"+m+":"+s;
        console.log(h+":"+m+":"+s)
        }
function startw(){
    
    if(timer!=null){
        clearInterval(timer)
    }
       timer= setInterval(stopwatch,1000)

        
}
function startstop(){
    
    clearInterval(timer)
}
function startreset(){
    clearInterval(timer)
    seconds=0
     minutes=0
     hours=0
    let displayt=document.getElementById("stopwatch")
    displayt.innerHTML="00:00:00"
    
}