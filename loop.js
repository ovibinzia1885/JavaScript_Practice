//loop

// for(statement1; statement2; statement3)   
//     {

//     }

// for(let i=0;i<5;i++){
//     console.log("Hello World", +i);
// }
let airPlan=["airbus","boeing","cessna","concorde"];
for(let i=0;i<airPlan.length;i++){ //looping through array elements
    console.log(airPlan[i]);

    if(airPlan[i]==="cessna"){
        let value=airPlan[i];
        console.log("Found the element:", value);
        break;
    }   
}