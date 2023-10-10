let express = require ('express');
let router = express.Router();
let controller = require('../controllers/controller');


router.post("/", function (req, res) {
  // **controller perform db logic
  controller.postCat(req, res);

});

router.get("/", (req, res) => {
  // **controller perform db logic
  controller.getAllCats(req, res);
});

module.exports = router;