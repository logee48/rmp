const NewDataa = require("../Models/New")

module.exports.Apple = async (req, res, next) => {
    const {neww, createdAt} = req.body;
      const wat = await NewDataa.create({ neww, createdAt });
      res
        .status(201)
        .json({ message: "works,noice brooo", success: true, wat });
      next(); 
    };