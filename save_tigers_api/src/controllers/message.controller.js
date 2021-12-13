const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const Message = require("../models/message.model");

module.exports.addMessage = async (req, res, next) => {
  try {
    const { fullname, email, detail } = req.body;
    if (fullname == "" || email == "" || detail == "")
      res.status(400).send({ error: "Empty inputs!" });
    else {

      let newMessage = new Message({
        fullname,
        email,
        detail,
      });

      //SendGrid requirements
      const msg = {
        to: email,
        from: "noreplyprcc@gmail.com",
        subject: "Copy of the message sent to Save Tigers (no-reply)",
        text: `${detail}`,
      };

      sgMail
        .send(msg)
        .then(() => {
          console.log("Email sent");
        })
        .catch((error) => {
          console.error(error);
        });

      newMessage.save((error) => {
        if (error) {
          console.log(error);
          res.status(500).send({ error: "Fail to save message in database" });
        } else {
          res.send(newMessage);
        }
      });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};