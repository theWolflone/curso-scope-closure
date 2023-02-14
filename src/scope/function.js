function greetings() {
  let userName = "lxbo";    
  console.log(userName);  

  if (userName === "lxbo") {
    console.log(`Hello ${userName}!`);  
  }
}

greetings();

console.log(userName); // ReferenceError: userName is not defined