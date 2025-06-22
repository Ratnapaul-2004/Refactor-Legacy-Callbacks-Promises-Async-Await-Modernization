const fs = require("fs");

function readFile(path){
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf-8", (err, data) => {
      if(err){
        return reject(err);
      } else {
        return resolve(data);
      }
    });
  });
}

readFile("./bio.txt")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(`Error: ` + err);
  })