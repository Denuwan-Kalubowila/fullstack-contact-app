const express = require('express')
const userQuery =require('./services/user')

const router = express.Router()

let user=userQuery.userData

//get,add,update,delete users
router.get('/user',user.user)
router.get('/user/:id',user.userWithId)
router.post('/user',user.addUser)
router.put('/user/:id',user.updateUser)
router.delete('/user/:id',user.deleteUser)

module.exports=router