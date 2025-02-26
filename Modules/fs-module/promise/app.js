const fs = require("fs");
const path = require("path");


const fileName = "first.txt";
const filePath = path.join(__dirname, fileName)


const file=__dirname;

// //to read the directory
// fs.promises.readdir(file).then((data) => {
//   console.log(data);

// }).catch((error) => {
//   console.log(error.message);

// })


// //create file

fs.promises
.writeFile(filePath,"this is first content","utf-8")
.then((data)=>{console.log("file creating................");
}).catch((error)=>{
  console.log(error);
  
})

// //read file
// fs.promises
//   .readFile(filePath,"utf-8")
//   .then((data) => {
//     console.log(data);
//     })
//     .catch((error) => {
//       console.log(error.message);
//       })
      


// //append file

// fs.promises
// .appendFile(filePath,"\nthis is second content","utf-8")
// .then(console.log("appending................"))
// .catch((error)=>{
//   console.log(error);
// })

// //delete file
// fs.promises
// .unlink(fileName)
// .then(console.log("deleting..........................."))
// .catch((error)=>{
//   console.log(error);
  
// })


// //rename

// fs.promises
// .rename("first.txt","new.txt")
// .then(console.log("file name has been changing......................"))
// .catch((error)=>{
//   console.log(error);
//   })