const { Signup, Login } = require("../Controllers/AuthController");
const { userVerification } = require("../Middlewares/AuthMiddleware")
const { Prof_data_fetch } = require("../Middlewares/GetProfR")
const { Apple } = require("../Controllers/Newww")
const { Prof_test } = require("../Controllers/ProfessorShit")
const { Comment_test } = require("../Controllers/CommentShit")
const router = require("express").Router();

router.post("/signup", Signup);
router.post("/login", Login);
router.post("/", userVerification);
router.post("/test", Apple); 
router.post("/test1", Prof_test);
router.post("/test2", Comment_test);
router.get("/fetch", Prof_data_fetch);

module.exports = router;
