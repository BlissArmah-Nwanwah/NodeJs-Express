const nodemailer = require('nodemailer');

const sendEmail = async() =>{

    let testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'napoleon51@ethereal.email',
            pass: 'YJAzgHtsqh9AjTC985'
        }
    }); 

    let info = await transporter.sendMail({
        from: '"Bliss Qodes" <bliss.armah-nwanwah@amalitech.com>', // sender address
        to: "blissarmah8@gmail.com", // list of receivers
        subject: "Hello Testing Email  ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Testing Email?</b>", // html body
      });
}


module.exports = sendEmail;