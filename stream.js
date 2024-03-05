// There are 4 Event Emitters in Stream -- data, end , error, finish
// It is used to trasnmit the data 
const fs = require('fs')
const zipfile= require('zlib');


// const readStream = fs.createReadStream('../Backend/module/inputFile.txt')

// readStream.on("data", (data)=>{
//     console.log(data.toString())
//     console.log(data.toJSON())
// })
// dataa="Owaiss"
// readStream.on('end', ()=>{
//     console.log("Finish Reading Data!")
//     // console.log(dataa)
//     console.log(dataa.toString())
// })

// readStream.on('error', (err)=>{
//     console.log(err)
// })

// //WRITESTREAM METHOD

// const writeStream =fs.createWriteStream('../Backend/module/inputFile.txt')
// dataaa= "Node is used in backend"
// writeStream.write(dataaa);

// writeStream.end();

// writeStream.on('finish', ()=>{
//     console.log('Finish Writing Data!')
// })



// Converting into ZipFile
const readStream= fs.createReadStream('./module/inputFile.txt')

readStream.pipe(zipfile.createGzip('./module/inputFile.txt')).pipe(fs.WriteStream('./module/inputFile.txt.gz'))

