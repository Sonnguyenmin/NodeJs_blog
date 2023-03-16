const express = require("express"); 
const path = require("path"); 
const app = express(); 
const morgan = require("morgan"); 
const exphbs = require("express-handlebars"); 
const { engine } = require("express-handlebars"); 
app.use(morgan("combined"));

app.use(express.static(path.join(__dirname,'public')));

app.engine("hbs", engine({
    extname: '.hbs'
})); 
app.set("view engine", "hbs"); 
app.set("views", path.join(__dirname, "resource/views"));

app.get("/", (req, res) => { res.render("home");});

app.get("/new", (req, res) => { res.render("news");});


app.listen(3000);