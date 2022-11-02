const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();

router.get('/api', (req, res) => res.send('This is root!'))

router.post('/api/locations', controllers.createLocation)
router.post('/api/hikes', controllers.createHike)
router.get('/api/hikes', controllers.getAllHikes)
router.get('/api/locations', controllers.getAllLocations)
router.get('/api/locations/:id', controllers.getLocationById)
router.get('/api/locations/:id/hikes', controllers.getHikesByLocation)
router.get('/api/hikes/:id', controllers.getHikeById)
router.put('/api/hikes/:id', controllers.updateHike)
router.delete('/api/hikes/:id', controllers.deleteHike)

module.exports = router;