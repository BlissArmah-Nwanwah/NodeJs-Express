const http = require('http')
const {readFileSync} = require('fs')

// get all files
const homePage = readFileSync('./navbar-app/index.html')
const homeStyles = readFileSync('./navbar-app/styles.css')
const homeImage = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')

const server = http.createServer((req,res)=>{
    // console.log(req.method);
    const url = req.url
    console.log(url);
    // home page
    if (url === '/') {
        res.writeHead(200,{'conent-type':'text/html'})
        res.write(homePage)
        res.end()
    }
    // styles      
    else if (url ==='/styles.css') {
        res.writeHead(200,{'conent-type':'text/css'})
        res.write(homeStyles)
        res.end()
    }
    // Logo      
    else if (url === '/l ogo.svg') {
        res.writeHead(200,{'conent-type':'image/svg+xml'})
        res.write(homeImage) 
        res.end()
    }
    // about page       
    else if (url ==='/browser-app.js') {
        res.writeHead(200,{'conent-type':'text/javascript'})
        res.write(homeLogic)
        res.end()
    }
    // 404  
    else{
        res.writeHead(404,{'conent-type':'text/html'})
        res.write('<h1>page not found</h1>')
        res.end()
    }
})

server.listen(5000)