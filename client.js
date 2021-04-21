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
