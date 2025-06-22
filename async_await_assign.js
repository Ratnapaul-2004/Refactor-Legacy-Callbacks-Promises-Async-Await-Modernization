const fs = require("node:fs/promises");

async function readFile(){
  try{
    const data = await fs.readFile("./bio.txt", "utf-8");
    console.log(data);
  } catch(err) {
    console.log(`Error: ` + err);
  }
}

readFile();