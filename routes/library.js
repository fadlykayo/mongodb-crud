var express = require('express');
var router = express.Router();
let libraryController = require ('../controllers/libraries_controller');

/* GET home page. */

router.get('/', libraryController.getBooks)

router.get('/:isbn', libraryController.getBook)

router.post('/', libraryController.createBook)

// router.delete('/:id', libraryController.deleteUser)
//
// router.put('/:id', libraryController.updateUser)
//
// router.post('/signin', libraryController.signIn)

module.exports = router;
