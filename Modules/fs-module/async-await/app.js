const fs=require("fs");
const path=require("path");


//file name
const fileName="abc.txt";
//where file stores and which directory
const filepath=path.join(__dirname,fileName)

// //create file using async await
const writeFile=async()=>{
      try {
       await fs.promises.writeFile(filepath,"this is first text","utf-8")
      console.log("file created successfully");
      
    } catch (error) {
      console.log(error);
    }
}
writeFile();




// //read file 
// const readFile=async()=>{
  
//   try {
//   const data=await fs.promises.readFile(filepath,"utf-8");
//   console.log(data);
//     console.log("file reading.........");
    
//   } catch (error) {
//     console.log(error);
    
//   }
// }
// readFile();


// //apending file
const appendFile=async()=>{
  try {
    const data= await fs.promises.appendFile(filepath,"\nthis is second text","utf-8");
    console.log(data);
    
  } catch (error) {
    console.log(error);
    
  }
}
appendFile();




// // //deleting file
// const deleteFiles=async()=>{
//   try {
//     return await fs.promises.unlink(fileName);
//     console.log("deleting file.............");
    
//   } catch (error) {
//     console.log(error);
    
//   }
// }
// deleteFiles();



// //rename file
// const renameFiles=async()=>{
//   try {
//     return fs.promises.rename(fileName,"new.txt");
//   } catch (error) {
//     console.log(error);
    
//   }
// }
// renameFiles();