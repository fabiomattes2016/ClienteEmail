"use strict";

const nodemailer = require("nodemailer");

async function main() {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLC: true,
    auth: {
      user: "ottohxtestesdev@gmail.com",
      pass: "Otto2021*",
    },
  });

  let info = await transporter.sendMail({
    from: '"Fábio Mattes 👻" <ottohxtestesdev@gmail.com>',
    to: "aabettio@gmail.com, fabiomattes2007@gmail.com",
    subject: "E-mail de teste para STJ",
    text: "Olá STJ",
    html: "<b>Olá STJ</b>",
  });

  console.log("E-mail enviado: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

main().catch(console.error);
