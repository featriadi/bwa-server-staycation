const router = require('express').Router();
const adminController = require('../controllers/adminController');
const { uploadSingle, uploadMultiple } = require('../middlewares/multer');

//Dashboard
router.get('/dashboard', adminController.viewDashboard);

//Category
router.get('/category', adminController.viewCategory);
router.post('/category', adminController.addCategory);
router.put('/category', adminController.editCategory);
router.delete('/category/:id', adminController.deleteCategory);

//Bank
router.get('/bank', adminController.viewBank);
router.post('/bank', uploadSingle, adminController.addBank);
router.put('/bank', uploadSingle, adminController.editBank);
router.delete('/bank/:id', adminController.deleteBank);

//Item
router.get('/item', adminController.viewItem);
router.get('/item/show-image/:id', adminController.showImageItem);
router.post('/item', uploadMultiple, adminController.addItem);
router.get('/item/:id', adminController.showEditItem);
router.put('/item/:id', uploadMultiple, adminController.editItem);
router.delete('/item/:id/delete', adminController.deleteItem);

//detail item
router.get('/item/show-detail-item/:itemId', adminController.viewDetailItem);
router.post('/item/feature', uploadSingle, adminController.addFeature);
router.put('/item/feature/edit', uploadSingle, adminController.editFeature);
router.delete('/item/:itemId/feature/:id', adminController.deleteFeature);

router.post('/item/activity', uploadSingle, adminController.addActivity);

//Booking
router.get('/booking', adminController.viewBooking);

module.exports = router;