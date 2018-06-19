const express = require('express');
const router = express.Router();
const Fact = require('../models/fact');


//Get all facts
router.get('/', (req, res, next) => {
  Fact.find({})
  .then(facts => {
    res.send(facts);
  })
})

//Post new fact
router.post('/', (req, res, next) => {
  Fact.create(req.body)
  .then((fact) => {
    res.send(fact);
  })
  .catch(next)
})

router.delete('/:id', (req, res, next) => {
  Fact.findOneAndRemove( { _id: req.params.id } )
  .then(fact => {
    res.send(fact);
  })
})

//Find fact by user
router.get('/:user', (req, res, next) => {
  Fact.find({ submittedBy: req.params.user }, req.body)
  .then((facts) => {
    if(facts.length < 1) {
      res.send("No facts exist for this user");
    } else {
      res.send(facts);
    }
  })
  .catch(next)
})

router.get('/contains/:fact', (req, res, next) => {
  Fact.find({ fact: { "$regex": req.params.fact } })
  .then(facts => {
    res.send(facts);
  })
  .catch(next)
})

module.exports = router;