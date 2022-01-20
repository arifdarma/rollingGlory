var giftRepository = require('../repository/gift')
var db = require('../database')

module.exports = {
    getAllGift : async function(req,res){
        var result = await giftRepository.findAllGift(req)
        res.send(result).status(200)
    },
    createGift : async function(req,res){
        var result = await giftRepository.addGift(req)
        res.send(result).status(200)
    },
    getSingleGift : async function(req,res){
        var result = await giftRepository.findGiftById(req)
        res.send(result).status(200)
    },
    updateGift : async function(req,res){
        var result = await giftRepository.editGift(req)
        res.send(result).status(200)
    },
    updateGiftAtribute : async function(req,res){
        var result = await giftRepository.editGiftAttribute(req)
        res.send(result).status(200)
    },
    deleteGift : async function(req,res){
        var result = await giftRepository.deleteGift(req)
        res.send(result).status(200)
    },
    redeemGift : async function(req,res){
        const{id,total}=req.body
        var len=id.length
        try {
            for(let i=0;i<len;i++){
                var result = await giftRepository.redeemGift(id[i],total[i])
            }
            res.send(result)
        } catch (error) {
            res.send('error '+error)
        }
    },
    ratingGift : async function(req,res){
        var result = await giftRepository.rateGift(req)
        res.send(result)
    }
}