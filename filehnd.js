// Write file Using Promises (Async only)
const fs= require('fs')

// fs.writeFile('./module/outputFile.txt', "Hello bro \n", (err)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log("Data written successfully")
// })

// err arguement will be passed while executing writefile method

fs.writeFileSync('./module/outputFile.txt', " bckend app here \n" )


//Append method in fs

data="Backend Application"


fs.appendFile("./module/outputFile.txt",`\n ${data} \n`, (err)=>{
    if(err){
        console.log(err)
    }
    console.log("Data added successfullyy")
})

