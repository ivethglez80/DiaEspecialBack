const expressAsyncHandler = require("express-async-handler");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
dotenv.config();

let transporter = nodemailer.createTransport({
  host: process.env._HOST,
  port: process.env._PORT,
  secure: false, // true for 465, false for other ports like 587
  auth: {
    user: process.env._MAIL, // generated ethereal user
    pass: process.env._PASSWORD, // generated ethereal password
  },
});

const sendEmail = expressAsyncHandler(async (req, res) => {
  const { nombre, apellido, email, whatsapp, consulta } = req.body;
  console.log(nombre, apellido, email, whatsapp, consulta);


  // PARA ENVIAR DESDE EL WEBSITE A OTROS
  // var mailOptions = {
  //   from: process.env._MAIL,
  //   to: email,
  //   consulta: consulta,
  //   nombre: nombre,
  //   apellido: apellido
  // };

  // PARA QUE LOS VISITORS ENVIEN CONSULTAS
  var mailOptions = {
    from: email, // Utiliza la dirección de correo electrónico del visitante como remitente
    to: process.env._MAIL, // Utiliza la dirección de correo electrónico del propietario del sitio como destinatario
    subject: 'Consulta del sitio web', // Asunto del correo
    text: `
      Nombre: ${nombre}
      Apellido: ${apellido}
      Email: ${email}
      Whatsapp:${whatsapp}
      Consulta: ${consulta}
    `
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.status(500).send("Error al enviar el correo electrónico");
    } else {
      console.log("Email sent successfully!");
      res.status(200).send("Correo electrónico enviado con éxito");
    }
  });
});

module.exports = { sendEmail };