const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on("WaterFull", () => {
  console.log("Turn off the motor");
  setTimeout(() => {
    console.log("genetle reminder");
  }, 3000);
});

console.log("script is running");
myEmitter.emit("WaterFull");
console.log("Still running");

