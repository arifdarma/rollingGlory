var userRepository=require('../repository/user')
var bcrypt = require('bcrypt')

module.exports = {
    register : async function(req,res){
        var nama = req.body.nama
        var email = req.body.email
        var password = req.body.password
        password = password.toString()
        try {
            var hashPass = bcrypt.hashSync(password,10)
            console.log(hashPass)
            var result = await userRepository.createUser(nama,email,hashPass)
        } catch (error) {
            res.send('error '+error)
        }
        res.send(result).status(200)
    },

    login : async function(req,res){
        var password=req.body.password
        var resp=''
        try {
            var result=await userRepository.loginUser(req)
            var hashed=result[0].password.substring(0,result[0].password.length-1)
            if(await bcrypt.compare(password,hashed)){
                resp='Logged In'
            }else{
                resp='Wrong Password'
            }
        } catch (error) {
            resp='error' + error
        }
        res.send(resp)
    }
}