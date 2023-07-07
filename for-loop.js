var mlist=[1,2,3,4,5]
var pos;

for(pos=0; pos <mlist.length;pos++) {
    console.log('position=>'+ pos + 'value=>'+ pos +mlist[pos])
}
//adding break
var mlist=[1,2,3,4,5]
var pos;

for(pos=0; pos <mlist.length;pos++) 
 {
    if( pos>=3) break
    console.log('position=>'+ pos + 'value=>'+ pos +mlist[pos])
}
//continue keyword
var mlist=[1,2,3,4,5]
var pos;

for(pos=0; pos <mlist.length;pos++) 
 {
    if( pos%2!==0) continue
    console.log('position=>'+ pos + 'value=>'+ pos +mlist[pos])
}

function hackerEncode(message) {
    let encodedMessage = message.replace(a ="4").replace(e= "3").replace(i= "1").replace(o= "0").replace(s= "5");
    return encodedMessage;
  }
  
  console.log(hackerEncode("javascript is cool")); // "j4v45cr1pt 15 c00l"

  var btn=document.getElementById('btn')