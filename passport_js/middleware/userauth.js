const bcrypt=require('bcrypt');
const User = require('../model/user.schema');
const localstratage=require('passport-local').Strategy;
const axios=require('axios');
const login=(passport)=>{
    passport.use(new localstratage({usernameField: 'email'},
        async(email,password,done)=>{
            try {
              
                const captchaResponse = req.body['g-recaptcha-response'];
                if (!captchaResponse) {
                    return done(null, false, { message: 'CAPTCHA verification failed' });
                }

                const verifyUrl = `https://www.google.com/recaptcha/api/siteverify`;
                const secretKey = 'your'; 

                const response = await axios.post(verifyUrl, null, {
                    params: {
                        secret: secretKey,
                        response: captchaResponse,
                    },
                });

                if (!response.data.success) {
                    return done(null, false, { message: 'CAPTCHA verification failed' });
                }
              let user=await User.findOne({email:email})
              if(!user) return done(null, false, {message: 'User not found'})
              let match=await bcrypt.compare(password,user.password)
              if(!match) return done(null, false, {message: 'Incorrect password'})
              return done(null, user)
          } catch (error) {
            return done(error, false)
          }

          
        }

    ))
    passport.serializeUser((user, done) => {
        done(null, user._id);
    });

    passport.deserializeUser(async (id, done) => {
let user=await User.findById(id)
return done(null,user)
    });
}



module.exports=login;