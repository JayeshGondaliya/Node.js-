//asynchronouns fs module

const { error } = require("console");

const fs = require("fs");
// const path = require("path");

// const fileName = "async_File.txt";
// const filePath = path.join(__dirname, fileName);
// const content = "this is first asychronouns file";


//write file
// fs.writeFile(filePath, content, "utf-8", (error) => {
//   if (error) {
//     console.log(err);
//   } else {
//     console.log("file has been wrriten");
//   }
// })


//read file
// fs.readFile(filePath, "utf-8", (error, data) => {
//   if (error) {
//     console.log(error);
//   }
//   else {
//     console.log("file has been reading.......................");
//     console.log(data);
//   }
// })


//update file(appendfile)
// fs.appendFile(filePath, "\n this issecond asynchronouns file", "utf-8", (error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("content has been appended in file");
//   }
// })


//delete file(unlink)

// fs.unlink(fileName, (error) => {
//   if (error) {
//     console.log(error);
//   }
//   else {
//     console.log("deleting file............................");
//   }
// })

fs.rename("async_File.txt", "file.txt", (error) => {
  if (error) {
    console.log(error);
  }
  else {
    console.log("file has been renaming...........................");
  }
})