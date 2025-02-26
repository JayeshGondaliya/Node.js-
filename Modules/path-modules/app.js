const { log } = require("console");
const path = require("path")
console.log(path);

console.log(__dirname);
console.log(__filename);


//path module features

const filePath = path.join("folder", "student", "data.txt");
console.log(filePath);

const pathParse = path.parse(filePath);
const pathResolve = path.resolve(filePath);
const pathJoin = path.join(filePath);
const pathExtName = path.extname(filePath);
const pathDirName = path.dirname(filePath);
console.log({ pathParse, pathResolve, pathJoin, pathExtName, pathDirName });

