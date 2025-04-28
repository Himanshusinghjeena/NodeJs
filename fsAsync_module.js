const fs = require('fs');
const path = require('path');

const fileName ='xyzAsync.txt';
const filePath = path.join(__dirname,fileName);
// console.log(filePath);


// write method by using Async Fs functions
// fs.writeFile(filePath,"this is a file that are create using Async fs methods ",'utf-8',(err)=>{
//     if(err) console.error(err);
//     else console.log("succesfully done..")
// })


// read method by using Async Fs functions 
// fs.readFile(filePath,'utf-8',(err,data)=>{
//     if(err) console.error(err);
//     else console.log(data)
// })

// append method by using Async Fs functions
// fs.appendFile(filePath,"i update the file using append",'utf-8',(err)=>{
//     if(err) console.error(err);
//     else console.log("file hass been updated")
// })


fs.unlink(filePath,(err)=>{
    if(err) console.error(err);
    else console.log("file has been deleted")
})