var express=require('express');
const { route } = require('express/lib/application');
var router=express.Router();

const credensial={
    email:"admin2001@gmail.com",
    password:"admin"
}
//login users

router.post('/login',(req,res)=>{
    if(req.body.email==credensial.email && req.body.password==credensial.password){
        req.session.user=req.body.email;
        res.redirect('/route/dashboard')
        // res.end("Login Successful !");
    }else{
        res.end("Invalid username and password !!!");
    }
})

//route for dashboard
router.get('/dashboard',(req,res)=>{
    if(req.session.user){
        res.render('dashboard',{
            user:req.session.user
        })
    }else{
        res.send("Unathorised user")
    }
})


//route for logout
router.get('/logout',(req,res)=>{
    req.session.destroy(function(err){
        if(err){
            console.log(err);
            res.send("Error")
        }else{
            res.render('index',{title:"logout done",logout:"logout Successfully...!"})
        }
    })
})
module.exports=router;