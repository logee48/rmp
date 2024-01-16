const NewDataa = require("../Models/New")

module.exports.Apple = async (req, res, next) => {
    // try {
    //   //getting user data from body
    //   const { neww, createdAt } = req.body;
    //   //check if email already exist
    //   const existingUser = await NewDataa.findOne({ email });
    //   if (existingUser) {
    //     return res.json({ message: "User already exists" });
    //   }
    const {neww, createdAt} = req.body;
      const wat = await NewDataa.create({ neww, createdAt });
      //using mongodb unique id
    //   const token = createSecretToken(user._id);
    //   res.cookie("apple", token, {
    //     withCredentials: true,
    //     httpOnly: false,
    //   });
      res
        .status(201)
        .json({ message: "works,noice brooo", success: true, wat });
      next(); 
    };