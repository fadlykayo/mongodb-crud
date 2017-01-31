var express = require('express')
var router = express.Router()
let customersController = require('../../controllers/transactions')

/* GET home page. */

router.get('/', customersController.getTransactions)

router.get('/:memberid', customersController.getTransaction)

router.post('/', customersController.createTransaction)

router.delete('/:memberid', customersController.deleteTransaction)

router.put('/:memberid', customersController.updateTransaction)
//
// router.post('/signin', libraryController.signIn)

module.exports = router
