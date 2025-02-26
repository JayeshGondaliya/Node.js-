const fs = require("fs");
const path = require('path');

const fileName = "data.txt";
const filePath = path.join(__dirname, fileName);

//write file
fs.writeFileSync(filePath, "this is 1 time", "utf-8");

//read file
const reading_file = fs.readFileSync(filePath, "utf-8")
console.log(reading_file);

//appendFile
const appending_file = fs.appendFileSync(filePath, "\nthis is 2 time", "utf-8")

// fs.renameSync("data.txt", "data1.txt");

//delete file
// fs.unlinkSync(filePath)