const fs = require('node:fs/promises');



// utf-8 is a character encoding , if we dont use it we need to use callback function


fs.writeFile('./mainFile.txt', '\n Hii Owais')
.then(()=>{
    console.log("Data Added")
}).catch((err)=>{
    console.log(err)
})

fs.readFile('./mainFile.txt', 'utf-8')
.then((data)=>{
    console.log((data))
}).catch((err)=>{
    console.log(err)
})


