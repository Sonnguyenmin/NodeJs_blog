const express = require("express"); 
const path = require("path"); 
const app = express(); 
const morgan = require("morgan"); 
const exphbs = require("express-handlebars"); 
const { engine } = require("express-handlebars"); 
//app.use(morgan("combined"));

const route = require('./routes/index.routes');

app.use(express.static(path.join(__dirname,'public')));

app.engine("hbs", engine({
    extname: '.hbs'
})); 
app.set("view engine", "hbs"); 

//midleware
app.use(express.urlencoded({
    extended: true,
}));
app.use(express.json());

app.set("views", path.join(__dirname, "resource/views"));

route(app);


app.listen(3000);