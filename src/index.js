const { json, urlencoded } = require("express");
const express = require("express");
const morgan = require("morgan");
const app = express();
//Settigs
app.set("port", 3000 || process.env.PORT); // Establece puerto por default o en su caso usa el puerto 3000
app.set('json spaces', 2);

//Middlewares
app.use(morgan("dev"));
app.use(express.json());//Perimite procesar formatos json al servidor
app.use(express.urlencoded({ extended: false }));// Procesar datos que bienen desde formulario 

//routes
app.use(require("./routes/index"))
app.use("/appi/users", require("./routes/users"))
app.use('/appi/movies', require('./routes/movies'))

// Strating the server
app.listen(app.get("port"), () => {
    console.log(`Server on port ${app.get("port")}`);
})