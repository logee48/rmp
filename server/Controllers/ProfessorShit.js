// const NewDataa = require("../Models/P")
const Prof = require("../Models/ProfessorModel")

module.exports.Prof_test = async (req, res, next) => {
    const {username,prof_id,comment,email,overall_rating,review_1,review_2,review_3,like,createdAt} = req.body;
    const wat = await Prof.create({username,prof_id,comment,email,overall_rating,review_1,review_2,review_3,like,createdAt});
      res
        .status(201)
        .json({ message: "works,noice brooo", success: true, wat });
      next();  
    };