const EventEmitters=require("events");

const events=new EventEmitters();

const eventCouts={
  "user-login":0,
  "user-logout":0,
  "user-update":0,
  "user-purchase":0,
}

events.on("user-login",(username)=>{
  
  console.log(`${username} is loggin!!!!!`);
  
});
events.on("user-logout",(username)=>{
    console.log(`${username} is logout........`);
    
});
events.on("user-purchase",(username,item)=>{
  console.log(`${username} has purchased ${item}`);
  
});
events.on("user-update",(username,some)=>{
  console.log(`${username} has been updated ${some}`);
});



events.emit("user-login","jayesh",eventCouts['user-login']++);
events.emit("user-login","ruchit",eventCouts['user-login']++);
console.log(eventCouts["user-login"],"login value");





events.emit("user-logout","ruchit",eventCouts['user-login']--,eventCouts['user-logout']++);

console.log(eventCouts['user-logout'] ,"this is logout values");
console.log("remain value of login ",eventCouts['user-login']);




// purchase
events.emit("user-purchase","jayesh","bike",eventCouts['user-purchase']++);
events.emit("user-purchase","ruchit","Eicher",eventCouts['user-purchase']++);
console.log(`purchasing value `,eventCouts['user-purchase']);


//update profile
events.emit("user-update","jayesh","email",eventCouts['user-update']++)
console.log(` updating value like `,eventCouts['user-update']);



