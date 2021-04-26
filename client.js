//----------------------------------------------------------------------------------
//callBack and Notify

var myJSON = {
  name: "hariom",
  callMe: name => {
    console.log("i am here");
    this.name = name;
    console.log(name);
  }
};

window.STACK = window.STACK || {};
window.STACK.myJSON = myJSON;


//--------------------------------------------------------------------------------------
//Closures
var fun = (data) =>{
  var temp  = 1;
  return function(){
    console.log(temp);
  }
}

fun();