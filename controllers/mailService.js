"use strict";

const config = require("../config.json");
const xoauth2 = require("xoauth2");

module.exports.zmail = async ctx => {
	const nodemailer = require("nodemailer");

	const transporter = nodemailer.createTransport({
		host: "smtp.ethereal.email",
		port: 587,
		auth: {
			user: "michaela.oconnell80@ethereal.email",
			pass: ""
		}
	});
	transporter.sendMail({
		from: "jointjm@gmail.com",
		to: "jointjm@gmail.com",
		subject: "Zevi wants to subscribe to The Mailing",
		text: "abc"
	});
	ctx.body = "ok";
};