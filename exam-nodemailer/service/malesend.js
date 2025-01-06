const nodemailer = require('nodemailer')
require ('dotenv').config()
const transport=nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user:"vandanpatel493@gmail.com",
        pass:process.env.pass,
    }
})

const sendmails=async(to,subject,content)=>{
  try {
      const mailoption={
          from:"vandanpatel493@gmail.com",
          to:to,
          subject:subject,
          text:content,
      }
     let res=await transport.sendMail(mailoption)
  } catch (error) {
    console.log(error.message);
    
  }
}

module.exports=sendmails;