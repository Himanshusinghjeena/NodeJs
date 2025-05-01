import https from 'https'
import readline from 'readline/promises';

const API_KEY = "1eac74c51157a43c176f37a84fe76b53";
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

try {
    const city = await rl.question('Enter the city to know weather: ');
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    https.get(url, (res) => {
        let data = "";

        res.on('data', (chunk) => {
            data += chunk;
        });

        res.on('end', () => {
            const weather = JSON.parse(data);
            if (weather.cod !== 200) {
                console.log(`❌ Error: ${weather.message}`);
            } else {
                console.log(`\n🌤  Weather Information:`);
                console.log(`City: ${weather.name}`);
                console.log(`Temperature: ${weather.main.temp}°C`);
                console.log(`Description: ${weather.weather[0].description}`);
                console.log(`Humidity: ${weather.main.humidity}%`);
                console.log(`Wind Speed: ${weather.wind.speed} m/s`);
            }

            rl.close();
        });
        res.on('error', (err) => {
            console.error("❌ Response error:", err.message);
            rl.close();
        });
    });
} catch (err) {
    console.error("❌ Input error:", err.message);
    rl.close();
}