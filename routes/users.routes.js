const router = require('express').Router()
const { UsersController } = require('../controllers')

router.get('/', UsersController.everything)
router.get('/:id', UsersController.one)
router.get('/:id/quiz', UsersController.quiz)
router.post('/', UsersController.signup)
router.put('/:id', UsersController.edit)
router.delete('/:id', UsersController.erase)

module.exports = router
