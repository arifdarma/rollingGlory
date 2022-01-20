var express = require('express')
var router = express.Router()
var giftsController = require('../controller/giftController')
var db = require('../database')
//Get Gifts
router.route('/')
    .get(giftsController.getAllGift)
    .post(giftsController.createGift)

router.get('/:id',giftsController.getSingleGift)
router.put('/:id',giftsController.updateGift)
router.patch('/:id',giftsController.updateGiftAtribute)
router.delete('/:id',giftsController.deleteGift)
router.post('/redeem',giftsController.redeemGift)
router.post('/:id/rating',giftsController.ratingGift)

module.exports = router;