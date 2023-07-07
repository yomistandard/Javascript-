//var countdownElement=
//document.getElementById('countdown');

//var initialcountdownVal= countdownElement.innerHTML;

//setInterval( function(){
   // initialcountdownVal=-1;
   // countdownElement.innerHTML=
   // initialcountdownVal;
//},1000);

var countdownElement=
document.getElementById('countdown');

var initialcountdownVal= countdownElement.innerHTML;

setInterval( function(){
    initialcountdownVal=
    initialcountdownVal > 0?
    initialcountdownVal -1 : 0;
    countdownElement.innerHTML=
    initialcountdownVal;
    countdownElement.style.fontSize =initialcountdownVal * 100 + "px"

    console.log(initialcountdownVal * 100 + "px")

    if(initialcountdownVal<=0){
        clearInterval(interval);
    }
    
},1000);