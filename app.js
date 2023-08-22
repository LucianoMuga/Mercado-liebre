const express = require("express")
const path = require("path")

const app = express()


const publicPath = path.resolve(__dirname,'./public')
app.use(express.static(publicPath));


const port = process.env.PORT || 3000
app.listen(port, ()=> {
    console.log( `Servidor funcionando en puerto ${port}`);
})

app.get("/", function(req ,res){
    let html = path.join(__dirname, "./views/home.html")
    res.sendFile(html)
})

app.get("/register", function(req, res){
    let html1 = path.join(__dirname, "./views/register.html")
    res.sendFile(html1)
})

app.get("/login", function(req, res){
    let html2 = path.join(__dirname, "./views/login.html")
    res.sendFile(html2)
})
