const crypto = require("crypto");

const randomValue = crypto.randomBytes(10).toString('hex');
console.log(randomValue);


const hash = crypto.createHash('sha256').update("himanshu").digest('hex');
const hash2 = crypto.createHash('sha256').update("himanshu").digest('hex');
console.log(hash);
console.log(hash2);