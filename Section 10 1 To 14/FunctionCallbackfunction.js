//callbacks are pass arguments as m function and returns the values in another word function inside another function as n argue=ment and done some operation 
function greet(name,callback) {
  console.log(`Hello, ${name}!`);
  callback()
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("Alice", sayGoodbye);