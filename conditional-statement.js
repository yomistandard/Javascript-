if(5>2){
    console.log(true);
}else {
    console.log(false)
}
//switch

var currentday=""
if(currentday==="mon"){
  console.log('timmings: 9:00-5:00')
} else if(currentday=== "tue"){ 
    console.log('timmimg:9:00-4:30')
}else if(currentday=== "wed"){ 
    console.log('timmimg:9:00-4:00')
}else if(currentday=== "thur"){ 
    console.log('timmimg:9:00-3:30')
}else if(currentday=== "fri"){ 
    console.log('timmimg:9:00-3:00')
}else if(currentday=== "sat"){ 
    console.log('timmimg:9:00-2:30')
}else if(currentday=== "sunday"){ 
    console.log('timmimg:9:00-2:00')
}
switch(currentday){
    case "mon":
        console.log('timmings: 9:00-5:00')
        break;
        case "tue":
        console.log('timmings: 9:00-4:30')
        break;
        case "wed":
            console.log('timmings: 9:00-4:00')
            break;
            case "thur":
        console.log('timmings: 9:00-3:30')
                break; 
                case "fri":
            console.log('timmings: 9:00-3:00')
                    break;  
                    case "sat":
            console.log('timmings: 9:00-2:30')
            break;         
            case "sun":
                console.log('timmings: 9:00-2:00')
                break;
                default :
                console.log('timming:9:00-12:00')
}

var enteredmark=77;
var f=25;
var d=45;
var c=50;
var c=60;
var b=70;
var A=80;

if(enteredmark<f){
    console.log('f')
} else if(45<77){
    console.log('d')
}else if(50<77){
    console.log('c')
}else if(60<77){
    console.log('d')
}else if(70<77){
    console.log('b')
}else if(80<77){
    console.log('A')
}
var num1=5;
var num2=8;
var num3=20;
if(num1>num2&&num1>num3){
    console.log('num1 +  is the greatest')
}else if(num2>num1&&num2>num3){
    console.log('num2 + is the greatest')
}else{
    console.log('num3 + is the greatest')
}

var length=20;
var breath=20;

if(length!==breath){
 console.log('square')
}else{
    console.log('rectangle')
}