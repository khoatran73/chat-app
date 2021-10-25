require("express-session")
require('dotenv').config()
require('express');
const User=require("../server/model/User.js")
const multer= require('multer');
const path= require('path')
const fs= require('fs')
const upload = multer({dest: "./public/images/uploads",
    fileFilter:(req,file,callback) => {  //fileFilter là middleware kiểm tra file trước khi upload
        if(file.mimetype.startsWith('image/')){
            callback(null,true);//cho phép upload
        }
        else{
            callback(null,false)
        }
    },limits:{fileSize:500000}  //max file size 5kb
})

class RegisterController {
    get(req, res) {
        res.render('register', {
            title: "Register", 
            // // email: ""
        })
    }
    post(req, res){
        let uploader= upload.single('image')
        uploader(req, res ,err=>{
            let image=req.file;
            let {name,email,password,password2}= req.body;
            let msg_err='';
            if(!image){
                msg_err="Không nhận được hình ảnh"
            }else if(password!==password2){
                msg_err="Mật khẩu không khớp"
            }else if(err){
                msg_err="Hình ảnh kích thước quá lớn"
            }else{
                User.findOne({email:email})
                    .then(data => {
                        if(data){
                            msg_err="Email đã được đăng kí !"
                        }
                    })
            }
            console.log(msg_err);
            if(msg_err.length!=0){
                res.render('register',{message:msg_err})
            }else{
                let imgpath=`./public/images/uploads/${email}.png`
                fs.renameSync(image.path,imgpath)
                let user_account ={
                    name:name,
                    email:email,
                    password:password,
                    image:`./images/uploads/${email}.png`
                }
                let user= new User(user_account)
                user.save()
                res.redirect('/login')
            }
            
        })
    }

}

module.exports = new RegisterController
