const router = require('express').Router()
const characterController = require('../controllers/character.controllers')

router.get('/', characterController.findOwned)

router.get('/all', characterController.findAll)

router.post('/:id', characterController.setMain)

router.delete('/:id', characterController.delete)

module.exports = router
