//Buffer and Streams
const buffer = require('buffer')

//  Buffer.alloc(length, data)

data= Buffer.alloc(12,3) // 12 is the total length of buffer and 1 is the data
console.log(data)

dat=Buffer.alloc(15,"Owais") // if we use alloc method we have to define a length first then data.
console.log(dat)


let name= Buffer.from("Owaiss") // if we use from method we can direct add data, no need to define length
console.log(name)
console.log(name.toString()) // converting data from buffer  into string format
console.log(name.toString('base64')) // first our data wilbe converted into bufer data then after converting into string method when we apply base64 it will change the representative of the output of data.


const fs= require('fs')
//Passing our data through a variable into buffer data

let fdata ="BOTS" 

fs.readFile("../Backend/module/inputFile.txt", (err,data)=>{
    if(!err){
        console.log(data.toString())
        fdata= data.toString()
        bdata = Buffer.from(fdata)
        console.log("Buffer data is:", bdata)
    }
    console.log(err)
})

