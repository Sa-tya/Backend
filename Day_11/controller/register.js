const user = require('../models/user')

const register = async(req,res)=>{
    const {email,password} = req.body;
    
    try {
        let alreadtExist = await user.findOne({where: {email}})
        if(alreadtExist) res.status(401).send('Already exist');
        else {
            const newUser = new user({email:email,password:password})
            const saveduser = await newUser.save();
            res.status(301).send('User registered..')
        }
    } catch(err){
        console.error(err)
        res.status(500).send('Something went wrong..')
    }
}

module.exports = register;