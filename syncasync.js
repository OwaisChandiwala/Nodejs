const fs = require('fs')


// Synchronous 

// let data= fs.readFileSync("./mainFile.txt")
// console.log("Hello Owais")
// console.log("Bye Owais")

//Async
fs.readFile("./mainFile.txt", (err,data)=>{
    if(!err){
        console.log(data.toString())
    }
    console.log(err)
})
