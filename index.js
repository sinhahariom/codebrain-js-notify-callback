import "./client.js";


//--------------------------------------------------------
//callBack and Notify

console.log(window.STACK.myJSON.name);
window.STACK.myJSON.callMe("sinha");


//--------------------------------------------------------
//Closures
var fun = (data) =>{
  data = 100;
  return function(d){
    console.log(data+d);
  }
}

var newFun = fun(5);
var newFun2 = fun(8);
newFun(2);
newFun2(1);


//-------------------------------------------------------------
//Call

var temp = {
   callMeback : function(data,addr) {
    console.log(this.name,data,addr);
  }
}

var tempo = {name:"sinha"};
temp.callMeback.call(tempo,"Holmes","22B Baker Street");



//-------------------------------------------------------------
//Apply

var temp2 = {
   callMeback : function(data,addr) {
    console.log(this.name,data,addr);
  }
}

var tempo2 = {name:"sinha"};
temp2.callMeback.apply(tempo2,["Holmes","22B Baker Street"]);




//-------------------------------------------------------------
//Bind


var temp3 = {
   callMeback : function(data,addr) {
    console.log(this.name,data,addr);
  }
}

var tempo3 = {name:"sinha"};
var tempo5 = temp3.callMeback.bind(tempo3,"Holmes","22B Baker Street");

tempo5();


//-----------------------------------------------------------
//Promises

var fun = new Promise((resolve, reject)=>{
  resolve('I am the best');
  reject('I think to much');
});

fun.then(resolve=>{
  console.log(resolve);
},reject =>{
  console.log(reject);
});