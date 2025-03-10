import { createReadStream, createWriteStream } from "fs";
import path from "path";
import { buffer } from "stream/consumers";

const readFilePath = path.join(import.meta.dirname, "input.txt");
const writeFilePath = path.join(import.meta.dirname, "output.txt");

const readFile = createReadStream(readFilePath, {
  encoding: "utf8",
  highWaterMark: 16,
});

const writeFile = createWriteStream(writeFilePath);

readFile.on("data", (chunk) => {
  console.log("this is chunk", Buffer.from(chunk));
  console.log(chunk);
  writeFile.write(chunk);
});
readFile.on("end", () => {
  console.log("completed");
  writeFile.end();
});

// //direct copy
// readFile.pipe(writeFile);
