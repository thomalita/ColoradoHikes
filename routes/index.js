const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();

router.get('/api', (req, res) => res.send('This is root!'))

router.post('/locations', controllers.createLocation)
router.post('/hikes', controllers.createHike)
router.get('/hikes', controllers.getAllHikes)
router.get('/locations', controllers.getAllLocations)
router.get('/locations/:id', controllers.getLocationById)
router.get('/locations/:id/hikes', controllers.getHikesByLocation)
router.get('/hikes/:id', controllers.getHikeById)
router.put('/hikes/:id', controllers.updateHike)
// router.delete('/locations/:id', controllers.deleteLocation)
router.delete('/hikes/:id', controllers.deleteHike)

module.exports = router;