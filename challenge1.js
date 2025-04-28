//! Objective
//* Create a program using Node.js EventEmitter that:

//? Listens for multiple types of user events (e.g., login, logout, purchase, and profile update).
//? Tracks how many times each event is emitted.
//? Logs a summary of all event occurrences when a special summary event is triggered.

//! Requirements
//? Create at least four custom events (e.g., user-login, user-logout, user-purchase, profile-update).
//? Emit these events multiple times with different arguments (e.g., username, item purchased).
//? Track and store the count of each event type.
//? Define a summary event that logs a detailed report of how many times each event was triggered.
const fs = require('fs');
const path = require('path');


const fileName = 'counter.json';;
const filePath = path.join(__dirname,fileName);

let eventCounts = {
    "user-login": 0,
    "user-logout": 0,
    "user-purchase": 0,
    "profile-update": 0,
  };

if(fs.existsSync(filePath)){
    const data = fs.readFileSync(filePath,'utf-8');
    eventCounts = JSON.parse(data)
}

const save =()=>{
    fs.writeFileSync(filePath,JSON.stringify(eventCounts));
}

const EventEmitter = require("events");

const emitter = new EventEmitter();



// Event listeners
emitter.on("user-login", (username) => {
  eventCounts["user-login"]++;
  console.log(`${username} logged in!`);
  save();
});

emitter.on("user-purchase", (username, item) => {
  eventCounts["user-purchase"]++;
  console.log(`${username} purchased ${item}!`);
  save();

});

emitter.on("profile-update", (username, field) => {
  eventCounts["profile-update"]++;
  console.log(`${username} updated their ${field}!`);
  save();

});

emitter.on("user-logout", (username) => {
  eventCounts["user-logout"]++;
  console.log(`${username} logged out!`);
  save();

});

emitter.on("summary", () => {
  console.log(eventCounts);
});

// Emit some events
// emitter.emit("user-login", "himanshu");
// emitter.emit("user-purchase", "himanshu", "Phone");
// emitter.emit("profile-update", "himanshu", "email");
// emitter.emit("user-logout", "himanshu");

// Show the summary
emitter.emit("summary")