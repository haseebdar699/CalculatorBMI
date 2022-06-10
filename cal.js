const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function (req, res) {
res.sendFile(__dirname+ "/bmiCalculator.html");    
});
app.post("/bmiCalculator",function (req, res) {
    var num1=parseFloat(req.body.n1);
    var num2=parseFloat(req.body.n2);
    var result=num1/Math.pow(num2,2);

    res.send("Hello haseeb your result is "+result);
})
app.listen(3000,function (req, res) {
   console.log("server is running at port 3000");
});