var db = require('../database')
var bcrypt = require('bcrypt')
module.exports = {createUser, loginUser}

async function createUser(nama,email,password) {
    try {
        await db.promise().query(`INSERT INTO users VALUES(NULL,'${nama}','${email}','${password})')`)
        result = 'User Registered'
    } catch (error) {
        result = 'Error '+error
    }
    return result
}

async function loginUser(req) {
    var email=req.body.email
    try {
        var result = await db.promise().query(`SELECT * FROM users WHERE email='${email}'`)
        if(bcrypt.compareSync(req.body.password,result[0][0].password)){
            result='Logged In'
        }
    } catch (error) {
        result = 'Error '+error
    }
    return result[0]
}