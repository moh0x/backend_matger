const express = require('express');
const router = express.Router();
const orderController = require('../../controllers/order/order_controller');
const { verifyToken } = require("../../utility/verify_token");
const { verifyAdmin } = require('../../utility/verify_role_admin');
router.get('/myOrders',verifyToken,orderController.getMyOrders);
router.get('/mySummary',verifyToken,verifyAdmin,orderController.getMySummary);
router.get('/delivirySummary',orderController.getDelivirySummary);
router.post('/addOrder',verifyToken,orderController.addOrder);
router.delete('/deleteOrder',verifyToken,orderController.deleteOrder);
router.get('/admin/first',verifyToken,verifyAdmin,orderController.getOrderFirstAdmin);
router.get('/admin/agree',verifyToken,verifyAdmin,orderController.getOrderAgreeAdmin);
router.get('/admin/notAgree',verifyToken,verifyAdmin,orderController.getOrderNotAgreeAdmin);
router.get('/admin/deliviry',verifyToken,verifyAdmin,orderController.getOrderDeliviryAdmin);
router.get('/admin/deliviried',verifyToken,verifyAdmin,orderController.getOrderDeliviriedAdmin);
router.get('/admin/finish',verifyToken,verifyAdmin,orderController.getOrderFinishAdmin);
router.get('/admin/archive',verifyToken,verifyAdmin,orderController.getOrderArchiveAdmin);
router.delete('/admin/deleteOrder',verifyToken,verifyAdmin,orderController.deleteOrder);
router.patch('/admin/finishOrder',verifyToken,verifyAdmin,orderController.finshOrderAdmin);
router.patch('/admin/archiveOrder',verifyToken,verifyAdmin,orderController.archiveOrderAdmin);
  module.exports = 
    router