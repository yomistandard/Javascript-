//dom manipulation methood
//1 create element


//document.createElement(tagName[, options])
/* Create a new div element */
//let div = document.createElement('div');

//2  text content
/* Create a new div Element */
//let divs = document.createElement('div');
//div.textContent = 'Hello World';

//3 inner text
/* Create a new div Element */
//let div = document.createElement('div')
//div.innerText = 'Hello World';

//4 inner html
/* Get the ul by it's id */
//const menu = document.getElementById('navList');

/* Get the ul content with innerHTML */
//console.log(menu.innerHTML);

//5 get atrribute
//const attribute = element.getAttribute(attributeName);
//const div1 = document.getElementById('data');

//6 set attribute
//Element.setAttribute(name, value);
/* Get the div element */
//const div2 = document.getElementById('data');

/* Set the attribute name with a value of john on the div */
//div1.setAttribute('name', 'john')


//7 classlist
// Get the navigation by id
//const navigation = document.querySelector('#navigation');

//console.log(navigation.className); //=> "navbar active"
//console.log(navigation.classList); //=> ["navbar" "active"]
//console.log(navigation.classList[0]); //=> "navbar"
//console.log(navigation.classList[1]); //=> "active"

const botton=document.querySelector("botton");
botton.addEventListener("click",()=>{
    alert("clicked")});


    function hackerEncode(message){
        let encodedMessage=message.replace(a ="2").replace(e="3");
        return encodedMessage;
    }
    console.log()