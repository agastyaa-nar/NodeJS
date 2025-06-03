const fs = require("fs")

const fileReader = (err, data) => {
  if (err) {
    console.log('File tidak terbaca')
    return
  }
  
  console.log(data)
}

fs.readFile("notes.txt", "utf-8", fileReader)