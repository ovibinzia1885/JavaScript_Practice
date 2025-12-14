const prompt = require("prompt-sync")();

var hour= prompt("Enter the number")
if(hour>=5 && hour<12){
    console.log("Good Morning");
}
else if(hour>=12 && hour<18){
    console.log("Good Afternoon");
}
else{
    console.log("Good Evening");
}