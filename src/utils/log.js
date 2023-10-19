import fs from "fs";
import path from "path";
//write message to log file
export const log = (message) => {
    let filename = new Date().toISOString().slice(0, 10);
  const logStream = fs.createWriteStream(path.join(__dirname, `${filename}`), {
    flags: "a",
  });
  logStream.write(`${message}\n`);
  logStream.end();
};