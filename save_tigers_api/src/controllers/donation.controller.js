const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const Donation = require("../models/donation.model");

module.exports.addDonation = async (req, res, next) => {
  try {
    const { fullname, email, amount } = req.body;
    if (fullname == "" || email == "" || amount == "")
      res.status(400).send({ error: "Empty inputs!" });
    else {

      let newDonation = new Donation({
        fullname,
        email,
        amount,
      });

      //SendGrid requirements
      const msg = {
        to: email,
        from: "noreplyprcc@gmail.com",
        subject: "YOU HAVE CREATED A PROMISE!",
        text: `Thanks for your donation!
        \n\nYou have just donated the amount of $${amount} !!
        \n\nThanks to your help, we will be able to rebuild the habitat of the trigres when necessary, the food and the cost of the personnel who will take care of it.
        \n\nThank you for saving the planet.`,
      };

      sgMail
        .send(msg)
        .then(() => {
          console.log("Email sent");
        })
        .catch((error) => {
          console.error(error);
        });

      newDonation.save((error) => {
        if (error) {
          console.log(error);
          res.status(500).send({ error: "Fail to save donation in database" });
        } else {
          res.send(newDonation);
        }
      });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
