"use strict";
const nodemailer = require("nodemailer");

exports.sendEmail = async (emailContent) => {
    try {

        console.log(emailContent);
        let account = await nodemailer.createTestAccount();

        let transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: account.user, // generated ethereal user
                pass: account.pass // generated ethereal password
            }
        });
        // const transporter = nodemailer.createTransport({
        //     host: 'smtp.ethereal.email',
        //     port: 587,
        //     auth: {
        //         user: 'hfcz7vurbmh5wei5@ethereal.email',
        //         pass: 'k2JkgW7Ygj2hzQXfAD'
        //     }
        // });

        // setup email data with unicode symbols
        let mailOptions = {
            from: '"Erick Rosete 👻" <erick.rosete@astradev.co>', // sender address
            to: "oscaralonso@hotmail.com", // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>" // html body
        };

        // send mail with defined transport object
        let info = await transporter.sendMail(mailOptions)

        console.log("Message sent: %s", info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    } catch (error) {
        console.log(error);
    }
}