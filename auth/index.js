const express = require('express')
const router = express.Router()

router.get('/login',function(req,res){
    res.send('pagina de login')
})

router.get('/logout',function(req,res){
    res.send('pagina de logout')
})

router.get('/recovery', function(requ, res){
    res.send('pagina de recovery')
})


module.exports = router

