let Customer={
    name:"Nazmul",
    age:30,
    address:"Dhaka, Bangladesh",
}

//dot notation
Customer.name="nazmul";
console.log(Customer.name);
console.log(Customer.age);
console.log(Customer.address);

//bracket notation
Customer["name"]="N A Z M U L";
console.log(Customer["name"]);

console.log(`Customer Name is: ${Customer.name}, Age is: ${Customer.age}, Address is: ${Customer.address}`);

// console.log(Customer)

