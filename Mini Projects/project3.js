import https from 'https';
 const getJoke=()=>{
    const url= 'https://official-joke-api.appspot.com/random_joke';
    https.get(url,(res)=>{
        // console.log(res)
        let data =""
        res.on('data',(chunk)=>{
            // console.log(chunk.toString())
            data+=chunk;
        })
        res.on('end',()=>{
            const joke = JSON.parse(data)
            console.log(`Here is a random joke of type: ${joke.type}`)
            console.log(`${joke.setup}`)
            console.log(`${joke.punchline}`);
        })
        res.on('error',(err)=>{
            console.log(`Error fetching the jokes, ${err.message}`)
        })
    })

 }

 getJoke();