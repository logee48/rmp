const Comm = require("../Models/Comment")
/*

if i change my mind about adding types of review in comments

*/
// module.exports.Prof_test = async (req, res, next) => {
//     const {username,prof_name,comment,overall_rating,review_1,review_2,review_3,like,createdAt} = req.body;
//     const wat = await Comm.create({username,prof_name,comment,overall_rating,review_1,review_2,review_3,like,createdAt});
//       res
//         .status(201)
//         .json({ message: "works,noice brooo", success: true, wat });
//       next();  
//     };

module.exports.Comment_test = async (req, res, next) => {
    const {username,prof_name,comment,overall_rating,like,createdAt} = req.body;
    const wat = await Comm.create({username,prof_name,comment,overall_rating,like,createdAt});
      res
        .status(201)
        .json({ message: "works,noice brooo", success: true, wat });
      next();  
    };