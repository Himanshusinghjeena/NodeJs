const fs = require('fs/promises');
const path = require('path');

const fileName = 'xyz.txt';
const filePath = path.join(__dirname, fileName);


// read all the files using async await 
const readDir = async () => {
    try {
        const res = await fs.readdir(__dirname);
        console.log(res)

    }
    catch (e) {
        console.log(e);
    }
}
// readDir()


// writeFile using async await 
const writeFile = async ()=>{
    try{
         fs.writeFile(filePath,"this file is created using async await functionality with promises",'utf-8') ;
        console.log("file created successfully....");
    }
    catch(err){
        console.log(err);
    }
}
// writeFile();

// append in the file
const appendInFile = async ()=>{
    try{
        await fs.appendFile(filePath,"\n i am appending the data using async await",'utf-8')
        console.log("Append Done....");
    }
    catch(err){
        console.log(err);
    }
}
// appendInFile();

// read form file 
const raedFromFile = async ()=>{
    try{
       const res = await  fs.readFile(filePath,'utf-8')
       console.log("reading: ",res);
    }
    catch(err){
        console.log(err);
    }
}
// raedFromFile()



// remove or delete the file 
 deleteTheFile=async()=>{
    try{
        await fs.unlink(filePath);
        console.log("File Removed Successfully...")
    }   
    catch(err){
        console.log(err);
    }
}
// deleteTheFile()


