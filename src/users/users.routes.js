const router = require('express').Router()

router.get('/', userServices.getAllUsers)
router.post('/', userServices.postNewUser)

router.get('/me', passportJwt, userServices.getMyUser)
router.patch('/me', passportJwt, userServices.patchMyUser)
router.delete('/me', passportJwt, userServices.deleteMyUser)




module.exports = router





