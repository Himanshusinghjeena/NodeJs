import https from 'https';
import readline from 'readline';


const apikey="cc30191327c23fd3b5a413d5";
const url=`https://v6.exchangerate-api.com/v6/${apikey}/latest/USD`;

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const convertCurrency=(amount,rate)=>{
    return (amount * rate).toFixed(2)
}

https.get(url,(res)=>{
    let data=""
     res.on('data',(chunk)=>{
        data+=chunk;
     })
     res.on('end',()=>{
        let rates =  JSON.parse(data).conversion_rates;
        rl.question('Enter amount in USD: ',(amount)=>{
            rl.question('Enter the Target Currency (e.g., INR, EUR, NPR): ',(currency)=>{
                const rate = rates[currency.toUpperCase()];
                if(rate){
                    console.log(`${amount} USD is approximately ${convertCurrency(amount,rate)} ${currency}`);
                }
                else{
                    console.log(`Invalid Currency Code`)
                }
                rl.close();
            })
        }) 
     })
})