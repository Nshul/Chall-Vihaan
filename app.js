var express   = require("express"), 
    bodyParser= require("body-parser"),
    app       = express(),
    moment	  =require("moment"),
    merchant = require("./merchant");

 app.use(bodyParser.urlencoded({extended : true}));
 app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function(req, res){
    res.render("new");
    
});
app.post("/transaction", function(req, res){
    console.log(req.body);
    var now=moment();
    console.log(now);
    console.log(merchant[req.body.merchant]);
    console.log(req.body.user.userName);
    var obj={
    	fileName: req.body.user.userName,
    	amount: req.body.amount,
    	locPin: req.body.user.pinCode,
    	time: now.hour(),
    	merchPin: merchant[req.body.merchant]
    	    };
    	    console.log(obj);
    	    
});

app.listen(3000, 'localhost',function(){
	console.log("server on duty, mallady");
});
