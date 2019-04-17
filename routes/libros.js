var express = require('express');
var router = express.Router();
 var libroscontroller= require("../controllers/libroscontroller");

router.get('/',libroscontroller.list);
 
router.post('/',libroscontroller.create );

router.get('/:isbn',libroscontroller.get );

router.put('/:id',libroscontroller.update );

router.delete('/:id',libroscontroller.delete );



module.exports = router;
