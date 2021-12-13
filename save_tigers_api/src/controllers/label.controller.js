const Label = require("../models/labels.model");

module.exports.getLabels = async (req,res,next) => {
    const labels = await Label.find({});

    if (labels) {
        res.status(200).send(labels);
      } else {
        res.status(400).send({ error: "Error getting labels" });
      }
}