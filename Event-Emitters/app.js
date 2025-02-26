const { error } = require("console");
const EventEmitters=require("events");
const events =new EventEmitters();

//
// events.on("event",()=>{
//   console.log("jay shree krishna");
// })

// //
// events.emit("event");


// //as a argunments pass
// events.on("event",(username)=>{
//   console.log("jay shree krishna",username);
// })
// events.emit("event","jayesh");






// //as a argunments with object
// events.on("events",(arg)=>{
//   console.log(`jay shree krishna ${arg.username} and ${arg.msg}`);
// })

// events.emit("events",{username:"jayesh",msg:"have a nice day"})




// //remove emmits
// const myFunction=()=>{
//   console.log("heellllloooo");
// }

// events.on("events",myFunction)
// events.removeListener("events",myFunction);
// console.log("removing...............");

// events.emit("events");






// //once() for one time run
events.once("events",(name)=>{
  console.log("hello" ,name);
})
events.emit("events","first");
events.emit("events","seconds");// not executed