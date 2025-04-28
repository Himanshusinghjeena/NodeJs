const path = require('path');
const fs = require('fs');

const fileName = 'promsises.txt';
const filePath = path.join(__dirname, fileName);


// console.log(filePath);

// writefile using promises
// fs.promises.writeFile(filePath, "this is a file that is maked by using promises anf file functions", 'utf-8').then(() => console.log("file creation successfully")).catch((err) => console.log(err)) 


// readfile using promises
// fs.promises.readFile(filePath,'utf-8').then((data)=>console.log(data)).catch((err)=>console.error(err))



// append using promises
// fs.promises.appendFile(filePath,'\n i am appending the data in the file','utf-8').then(()=>{console.log("data append successfully.....")}).catch((err)=>console.error(err))


// remove the file
fs.promises.unlink(filePath).then(()=>console.log("remove the file")).catch((err)=>console.error(err))

// show all the files inside this directory
// fs.promises.readdir(__dirname).then((filename)=>console.log(filename)).catch((err)=>console.log(err))