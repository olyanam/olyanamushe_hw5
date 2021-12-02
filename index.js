const express = require("express");
const ejs= require("ejs");
const app = new express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");
app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.render(`index`);
});

app.get("/my_resume", (req, res) => {
    res.render(`my_resume`);
});

app.get("/my_fun_facts", (req, res) => {
    res.render(`my_fun_facts`);
});

app.get("/trivia", (req, res) => {
    res.render(`trivia`);
});


//setting up server ports
const PORT= process.env.PORT || 2000;
app.listen(PORT, ()=> console.log(`Server is running on port 2000`)); 
