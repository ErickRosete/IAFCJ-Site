"use strict";
const nodemailer = require("nodemailer");
const NewsletterEmail = require("../models/newsletter-email");

exports.sendNewsletterEmail = async (email) => {
    try {
        console.log(email);
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: '2daiadfcjsl@gmail.com',
                pass: '2daiafcj.'
            }
        });

        let newsletterEmails = await NewsletterEmail.find();
        newsletterEmails = newsletterEmails.map(newsletterEmail => newsletterEmail.email);

        // setup email data with unicode symbols
        const mailOptions = {
            from: '"Sitio IAFCJ" <2daiadfcjsl@gmail.com>', // sender address
            bcc: newsletterEmails, // list of receivers
            subject: email.topic, // Subject line
            html: email.content // html body
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