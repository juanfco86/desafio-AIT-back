const gifsModel = require("../models/gifs.model");

const myGifList = (req, res) => {
  const myGifs = gifsModel.find({});
  myGifs.exec((error, data) => {
    if (error || !data) {
      return res.status(400).json({
        status: "error",
        msg: "Error or dont find gif",
      });
    }
    return res.status(200).json({
      status: "success",
      info: data,
      msg: "Have gifs in .mygifs",
    });
  });
};

const newGif = (req, res) => {
  try {
    let body = req.body;
    const createGif = new gifsModel(body);

    createGif.save((error, data) => {
      if (error || !data) {
        return res.status(400).json({
          status: "error",
          msg: "Error POST new gif",
        });
      }
      return res.status(200).json({
        status: "success",
        info: data,
        msg: "The POST gif save correctly",
      });
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      status: "error",
      msg: "Error save POST new gif",
    });
  }
};

module.exports = {
  newGif,
  myGifList,
};
