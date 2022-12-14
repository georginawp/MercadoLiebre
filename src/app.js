const express = require('express');
const app =  express ();
// Modulo nativo para manejar las rutas de los archivos
const path = require('path');

/*app.get('/',function (req,res){
    res.send('Bienvenidos al sitio');
});
*/

const port = process.env.PORT || 3001;
app.listen(port,() =>
    console.log ("Servidor corriendo en el puerto http://localhost:" + port)
);

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
});

app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html"))
});

app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
});


const publicPath = path.resolve(__dirname,"./../public");

app.use(express.static(publicPath));


