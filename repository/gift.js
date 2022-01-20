var db = require('../database')

module.exports={findAllGift,findGiftById,addGift,editGift,editGiftAttribute,deleteGift,redeemGift,rateGift}

async function findAllGift(req,res) {
    var urut = req.body.urut
    try {
        if(urut==1){
            var result = await db.promise().query(`SELECT * FROM gifts ORDER BY rating DESC`)
        }else{
            var result = await db.promise().query(`SELECT * FROM gifts ORDER BY rating ASC`)
        }
    } catch (error) {
        result.send(error)
    }
    return result[0]
}

async function findGiftById(req) {
    var id = req.params.id
    try {
        var result = await db.promise().query(`SELECT * FROM gifts WHERE id = '${id}'`)
    } catch (error) {
        result='Error'
    }
    return result[0]
}

async function addGift(req) {
    const{nama, stok, biaya} = req.body
    try {
        console.log(nama+" "+stok+" "+biaya)
        var query = `INSERT INTO gifts VALUES(NULL,'${nama}',NULL,'${stok}',NULL,'${biaya}')`
        await db.promise().query(query) 
        result='Data Added'
    } catch (error) {
        result='Error '+error
    }
    return result
}

async function editGift(req) {
    var id = req.params.id
    const{ nama, stok, biaya} = req.body
    try {
        var query = `UPDATE gifts SET nama='${nama}',stok='${stok}',biaya='${biaya}' WHERE id='${id}'`
        await db.promise().query(query) 
        result='Data Updated'
    } catch (error) {
        result='Error '+error
    }
    return result
}

async function editGiftAttribute(req) {
    var id = req.params.id
    const{biaya}=req.body
    try {
        await db.promise().query(`UPDATE gifts SET biaya='${biaya}' WHERE id='${id}'`)
        result='Gift Updated'
    } catch (error) {
        result='Error '+error
    }
    return result
}

async function deleteGift(req) {
    var id = req.params.id
    try {
        await db.promise().query(`DELETE FROM gifts WHERE id = '${id}'`)
        result='Data Deleted'
    } catch (error) {
        result='Error '+error
    }
    return result
}

function redeemGift(id,total) {
    try {
        var query = `UPDATE gifts SET stok=stok-'${total}' WHERE id='${id}'`
        db.promise().query(query)
        result='Gift '+id+' Redeemed'
    } catch (error) {
        result='Error '+error
    }
    return result
}

async function rateGift(req) {
    var gift_id = req.params.id
    const{rate} = req.body
    try {
        await db.promise().query(`INSERT INTO ratings VALUES(NULL,'${gift_id}','${rate}')`)
        var val = await db.promise().query(`SELECT AVG(rate) as rates FROM ratings WHERE gift_id='${gift_id}'`)
        var rates = val[0][0].rates
        var rateGift = await db.promise().query(`UPDATE gifts INNER JOIN (SELECT gift_id,COUNT(*) as val FROM ratings WHERE gift_id='${gift_id}') c ON gifts.id = c.gift_id SET gifts.rating='${rates}', gifts.review=c.val WHERE gifts.id='${gift_id}'`)
        result='Rating Added'
    } catch (error) {
        result='Error '+error
    }
    return result
}