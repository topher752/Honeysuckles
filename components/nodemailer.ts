import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
  secure: false,
  port: 587,
});

export const mailOptions = {
  from: process.env.EMAIL,
  to: process.env.EMAIL,
};
