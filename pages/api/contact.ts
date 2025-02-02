import { mailOptions, transporter } from "@/components/nodemailer";
import { EmailTemplate } from "@/components/EmailTemplate";
import { renderToStaticMarkup } from "react-dom/server";
// import fs from "node:fs";
// import path from "path";
// import { fileURLToPath } from "node:url";

const handler = async (req: any, res: any) => {
  const data = req.body;
  // const __filename = fileURLToPath(import.meta.url);
  // const __dirname = path.dirname(__filename);
  // const imageData = fs.readFileSync(__dirname + "/HeadLogo.svg", "binary");
  // const image = `data:image/jpg;base644,${Buffer.from(
  //   imageData,
  //   "binary"
  // ).toString("base64")}`;
  const email = renderToStaticMarkup(
    EmailTemplate({
      name: data.name,
      email: data.email,
      phoneNumber: data.phone,
      message: data.message,
      sale: data.sale,
    })
  );
  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: "Honesysuckels Inquiry",
      text: "Honesysuckels Inquiry",
      html: email,
    });
  } catch (error: any) {
    return res.status(400).json({ message: error.messaage });
  }
  return res.status(200).json({ message: "Email Sent" });
};

export default handler;
