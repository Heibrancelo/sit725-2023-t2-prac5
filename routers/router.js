let express = require ('express');
let router = express.Router();
let controller = require('../controllers/controller');


router.post('/', function(req, res) {
  // **controller perform db logic
  controller.postCat(req,res);


    // let cat = req.body;
    
    // cat.imagePath = cat.imagePath || "./images/kitten.jpeg";
  
    // console.log(cat);  
    // insertCat(cat, (err, result) => {
    //   if (err) {
    //     return res.json({ statusCode: 500, message: 'Failed to insert cat.' });
    //   }
    //   res.json({ statusCode: 201, data: result, message: 'success' });
    // });

  });
  
  
  router.get('/', (req, res) => {
    // **controller perform db logic
    controller.getAllCats(req,res);


    // getAllCats((err, result) => {
    //   if (err) {
    //     return res.json({ statusCode: 500, message: 'Failed to fetch cats.' });
    //   }
    //   res.json({ statusCode: 200, data: result, message: 'success' });
    // });

  });

  module.exports = router;