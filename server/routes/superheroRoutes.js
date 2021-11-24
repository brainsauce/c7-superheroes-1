
const express = require('express')
const router = express.Router()

const superheroModel = require('../models/superhero')

router.get('/superhero', async (req, res) => {
    let superheroList = await superheroModel.listSuperheros()
    res.send(superheroList)
})

router.get('/superhero/:id', async (req, res) => {
    let id =req.params.id
    let superhero = await superheroModel.findById(id)
    res.send(superhero)
})

router.post('/superhero', async (req, res) => {
    let newSuperhero = req.body
    let createdId = await superheroModel.createSuperhero(newSuperhero)
    res.send(createdId)
})


module.exports = router
