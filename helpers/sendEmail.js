"use strict";
const nodemailer = require("nodemailer");

exports.sendEmail = async (emailContent) => {
    try {
        console.log(emailContent);
        const transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: 'hfcz7vurbmh5wei5@ethereal.email',
                pass: 'k2JkgW7Ygj2hzQXfAD'
            }
        });

        const htmlContent = `
            <p style="margin-bottom:2rem;">Saludos</p>
            <p>${emailContent.name} quiere contactarse con usted </p>
            <p>Su correo electrónico es: ${emailContent.email}</p>
            <p>Su teléfono es: ${emailContent.phone}</p>
            <p>El tema del correo es: ${emailContent.topic}</p>
            <p>Su mensaje es el siguiente:</p>
            <p>${emailContent.body}</p>
            <p style="margin-top:3rem;">Atte: Sitio IAFCJ</p>
        `

        // setup email data with unicode symbols
        const mailOptions = {
            from: '"Sitio IAFCJ" <erickrosetebeas@hotmail.com>', // sender address
            to: "erickrosetebeas@hotmail.com", // list of receivers
            subject: "Contacto - Sitio Web", // Subject line
            html: htmlContent // html body
        };

        // send mail with defined transport object
        const info = await transporter.sendMail(mailOptions)

        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}