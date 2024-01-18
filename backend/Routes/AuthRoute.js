const { Prof_data_fetch } = require("../Middlewares/GetProfR")
const { Apple } = require("../Controllers/Newww")
const { Prof_test } = require("../Controllers/ProfessorShit")
const router = require("express").Router();

router.post("/test", Apple); 
router.post("/test1", Prof_test);
router.get("/fetch", Prof_data_fetch);

module.exports = router;
