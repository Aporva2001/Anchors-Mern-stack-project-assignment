// const speakeasy = require('speakeasy'); 
// const nodemailer = require('nodemailer');
// const {home,register,}= require('./auth-controllers');

// console.log(userEmail)
// const secret = speakeasy.generateSecret({ length: 10 }); 
// const code = speakeasy.totp({ 
//     secret: secret.base32, 
//     encoding: 'base32'
// }); 

// const transporter = nodemailer.createTransport({
//     host: 'smtp.ethereal.email',
//     port: 587,
//     auth: {
//         user: 'eula.turner10@ethereal.email',
//         pass: 'kHCVfKtY5Qf72CwZTV'
//     }
// });

// async function main() {
//     // send mail with defined transport object
//     const info = await transporter.sendMail({
//       from: '"Anchors Job Portal Assignment " <eula.turner10@ethereal.email>', // sender address
//       to: "bar@example.com, baz@example.com", // list of receivers
//       subject: "Hello ✔", // Subject line
//       text: "Hello world?", // plain text body
//       html: "<b>Hello world?</b>", // html body
//     });
  
//     console.log("Message sent: %s", info.messageId);
//     // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
//   }
  
//   main().catch(console.error);