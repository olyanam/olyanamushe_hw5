const express = require('express');
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
    res.render(`html/my_resume`);
});

app.get("/my_fun_facts", (req, res) => {
    res.render(`html/my_fun_facts`);
});

app.get("/trivia", (req, res) => {
    res.render(`trivia`);
});

app.get('/trivia', async (req,res)=>{
    var answer=req.query.keyword;
    console.log(req.query.keyword);
});

app.post('/submitquestion1',function(req, res){
    var answer1= req.body.qOneAnswer; 
    if(req.param.answer1==="b"){
        res.send('CORRECT')
    }
    else res.send('incorrect');
}); 

app.post('/submitquestion2',function(req, res){
    var answer2= req.body.qTwoAnswer; 
    if(req.param.answer1==="c"){
        res.send('CORRECT')
    }
    else res.send('incorrect');
}); 

app.post('/submitquestion3',function(req, res){
    var answer3= req.body.qThreeAnswer; 
    if(req.param.answer1==="a"){
        res.send('CORRECT')
    }
    else res.send('incorrect');
}); 

app.post('/submitquestion4',function(req, res){
    var answer4= req.body.qFourAnswer; 
    if(req.param.answer1==="b"){
        res.send('CORRECT')
    }
    else res.send('incorrect');
}); 

app.post('/submitquestion5',function(req, res){
    var answer5= req.body.qFiveAnswer; 
    if(req.param.answer1==="b"){
        res.send('CORRECT')
    }
    else res.send('incorrect');
}); 


    
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));

