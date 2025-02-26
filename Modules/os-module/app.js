//os module in node.js that are built in module in node js to provide property and method that used with operating system

const os = require("os");

console.log("os type", os.type());
console.log(" plateform ", os.platform());
console.log("cpu architecture ", os.arch());
console.log("system uptime in seconds ", os.uptime());
console.log("total memory ", os.totalmem());
console.log("Free memory ", os.freemem());
console.log("information about cpu installed ", os.cpus());
console.log("network interface ", os.networkInterfaces());
console.log("home dir", os.homedir());
console.log("temporary file ", os.tmpdir());




