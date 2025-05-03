import { readFile, writeFile } from 'fs/promises';
import { createServer } from 'http';
import path from 'path';
import { fileURLToPath } from 'url';
import crypto from 'crypto';

const PORT = 3005;

// Create __dirname manually for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// where the links are stored 
const DATA_FILE = path.join(__dirname, "data", 'links.json');


// this method for serving the files for different req 
const serveFile = async (res, filepath, contentType) => {
    try {
        const data = await readFile(filepath);
        res.writeHead(200, {
            "Content-Type": contentType
        });
        res.end(data);
    } catch (err) {
        console.error("Error reading file:", err);
        res.writeHead(404, {
            "Content-Type": 'text/plain'
        });
        res.end("404 page not found")
    }

}

const loadLinks = async () => {
    try {
        const data = await readFile(DATA_FILE, 'utf-8')
        try {
            return JSON.parse(data)
        } catch (parseErr) {
            return {}
        }
    }
    catch (err) {
        if (err.code === 'ENOENT') {
            await writeFile(DATA_FILE, JSON.stringify({}))
            return {}
        }
        throw err;
    }
}

const saveLinks = async (links) => {
    await writeFile(DATA_FILE, JSON.stringify(links))
}

const server = createServer(async (req, res) => {
    if (req.method === "GET" && req.url === '/') {
        const filePath = path.join(__dirname, "public", 'index.html');
        serveFile(res, filePath, 'text/html')
    }
    else if (req.method === "GET" && req.url === '/style.css') {
        const filePath = path.join(__dirname, "public", 'style.css');
        serveFile(res, filePath, 'text/css')
    }
    else if (req.method === 'POST' && req.url === '/shorten') {
        const links = await loadLinks();
        let body = '';
        req.on('data', (chunk) => {
            body += chunk
        })
        req.on('end', async () => {
            const { url, shortCode } = JSON.parse(body);
            if (!url) {
                res.writeHead(400, { 'Content-Type': 'text/plain' })
                return res.end('URL is required')
            }
            const finalShortCode = shortCode || crypto.randomBytes(4).toString('hex');
            if (links[finalShortCode]) {
                res.writeHead(400, { 'Content-Type': 'text/plain' })
                return res.end('ShortCode already exists. Please choose another.')
            }
            links[finalShortCode] = url;
            await saveLinks(links);
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ shortCode: finalShortCode, url }))
        })
    }
    else if (req.method === 'GET' && req.url === '/links') {
        const links = await loadLinks();
        res.writeHead(200, { 'Content-Type': 'application/json' })
        return res.end(JSON.stringify(links))
    }
    else {
       const links = await loadLinks();;
       const shortCode = req.url.slice(1);
       if(links[shortCode]){
        res.writeHead(302,{location: links[shortCode]})
        return res.end()
       }
    }
    // res.writeHead(404, { 'Content-Type': 'text/plain' })
    //     return res.end('shortened URL is not found')
})

server.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`)
})
