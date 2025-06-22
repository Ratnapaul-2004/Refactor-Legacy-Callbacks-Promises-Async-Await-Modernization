const fs = require("fs");

function readFile(path, callback){
  fs.readFile(path, "utf-8", (err, data) => {
    if(err) return callback(null, err);
    return callback(data, null);
  });
}

readFile("./bio.txt", (data, err) => {
  if(data){
    console.log(data);
  } else {
    console.log(`Error: ` + err);
  }
});

