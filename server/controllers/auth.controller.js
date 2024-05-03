const jwt = require('jsonwebtoken')
const User = require('../models/userModel')
const bcrypt = require('bcrypt')






 const login = async (req, res) => {
    try {
        console.log(req.body,';;;');
        const user = await User.findOne({ email: req.body.email });
        console.log(user);
        if (user) {
         
    
          res.status(200).json({ name:user.name });
        } else {
          res.status(201).json({ mesaage: "something wrong", number: req.body.number });
        }
      } catch (err) {

      }

}


 const signup =async (req,res)=>{
    try{
        console.log('pppdd',req.body);
        const userExist = await User.findOne({email:req.body.email})
        if(userExist){
            res.status(202).json({message:'Already have account'})
        }else{
            const password =  bcrypt.hashSync(req.body.password,10)
            console.log(password);
            Object.assign(req.body,{password})
            const user = new User(req.body)
            user.save().then((response)=>{
                console.log(response,process.env.JWT_SECRET);
                console.log('pppppppppp');
            const token = jwt.sign({id:response._id,name:response.name},process.env.JWT_SECRET,{expiresIn: 86400})
            console.log(token,'llll');
            res.status(200).json({token})
            }).catch((e)=>{
                console.log(e,'p');
            })

        }
        

    }catch(e){

    }
}

module.exports =  {
    login,
    signup
}