const fs = require('fs');
const path = require('path');
console.log(__dirname);
console.log(__filename);

const filename = 'test.txt';
const filePath = path.join(__dirname,filename)


const write  = fs.writeFileSync(filePath,"this is the starting only wait for result... ",'utf-8');
// console.log(write);

const read = fs.readFileSync(filePath,'utf-8');
console.log(read);

const appendFile = fs.appendFileSync(filePath,"this is the append data in file ",'utf-8');

// const fileDelete = fs.unlinkSync(filePath);

let newFileName ='abc.txt'
let newFilePath = path.join(__dirname,newFileName);
fs.renameSync(filePath,newFilePath);