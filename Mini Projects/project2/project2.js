import fs from 'fs';
import readline from 'readline';
import path from 'path';
import { fileURLToPath } from 'url';

// it gave the current whole file path 
const __filename = fileURLToPath(import.meta.url);
// from whole filepath extract the directory 
const __dirname = path.dirname(__filename);



const rl = readline.createInterface({
        input:process.stdin,
        output:process.stdout
})


const createFile =(fileName)=>{ 
    rl.question('Enter the content: ',(content)=>{
        const filePath = path.join(__dirname,`${fileName}.txt`)
        fs.writeFile(filePath,content,(err)=>{
            if(err){
                console.log(`Error Writing this file: , ${err.message}`);
            }
            else{
                console.log(`File ${fileName}.txt Created Succesfully! `)
            }
            rl.close()
        })
    })
}
rl.question('Enter the File name: ',createFile)