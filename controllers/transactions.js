let Transactions = require('../models/transactions')

module.exports = {
  getTransactions: (req, res) => {
    Transactions.find().then(function (data) {
      res.send({Transactions: data})
    }).catch(function (err) {
      res.json(err)
    })
  },
  getTransaction: (req, res) => {
    Transactions.find({memberid: req.params.memberid}).then(function (data) {
      res.send({Transaction: data})
    }).catch(function (err) {
      res.json(err)
    })
  },
  createTransaction: (req, res) => {
    Transactions.create({
      memberid: req.body.memberid,
      booklist: []
      // days: req.body.days,
      // out_date: req.body.out_date,
      // due_date: req.body.due_date,
      // in_date: req.body.in_date,
      // fine: req.body.fine,

    }).then(function (data) {
      res.json({data})
    }).catch(function (err) {
      res.json(err)
    })
  },
  deleteTransaction: (req, res) => {
    Transactions.findOneAndRemove({memberid: req.params.memberid}).then(function (data) {
      res.send(`Deleted Customer with MemberId: ${req.params.memberid}`)
    }).catch(function (err) {
      res.json(err)
    })
  },
  updateTransaction: (req, res) => {
    Transactions.findOneAndUpdate({memberid: req.params.memberid}, req.body, {new: true}).then(function (data) {
      // new true -> mengembalikan data baru
      res.json(data)
    }).catch(function (err) {
      res.json(err)
    })
  }
}
