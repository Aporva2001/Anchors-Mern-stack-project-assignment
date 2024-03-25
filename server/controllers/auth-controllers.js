const speakeasy = require('speakeasy'); 
const nodemailer = require('nodemailer');

const register= async (req,res)=> {
    try{
        const secret = speakeasy.generateSecret({ length: 10 }); 
const code = speakeasy.totp({ 
    secret: secret.base32, 
    encoding: 'base32'
}); 

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'eula.turner10@ethereal.email',
        pass: 'kHCVfKtY5Qf72CwZTV'
    }
});


    // send mail with defined transport object
    const {email}= req.body;
    const info = await transporter.sendMail({
      from: '"Anchors Job Portal Assignment " <eula.turner10@ethereal.email>', // sender address
      to: email, // list of receivers
      subject: "Anchors Job Portal Registration OTP", // Subject line
      text: "", // plain text body
      html: `<b>Your otp is: ${code} </b>`, // html body
    });
    if(code === otp)
    res.status(200).json({message: "Registered Successfully"})
    else
    res.status(200).json({message: "Invalid OTP"})
    // console.log("Message sent: %s", info.messageId);
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
  }
  catch(error){
    console.error(error)
  }
}  


const home= async (req,res)=>{
    try {
        res.status(200).send("Portal Home Page")
        
    } catch (error) {
        console.log(error);
    }
}
// const register= async(req,res)=>{
//     try {
//         console.log(req.body);
//         const {email,otp}= req.body;
//         res.status(200).send(req.body)
//     } catch (error) {
//         console.log(error)
//     }
// }

// console.log(userEmail,userOtp);


module.exports= {home, register};

