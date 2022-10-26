const Location = require('../models/locations');
const Hike = require('../models/hikes');
const { findById } = require('../models/locations');

const createLocation = async (req, res) => {
    try {
        const location = await new Location(req.body)
        await location.save()
        return res.status(201).json(
            location,
        );
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const createHike = async (req, res) => {
    try {
        const hike = await new Hike(req.body)
        await hike.save()
        return res.status(201).json(
            hike,
        );
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const getAllHikes = async (req, res) => {
    try {
        const hikes = await Hike.find().populate('location')
        
        return res.status(201).json(
            hikes
        );
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}


const getAllLocations = async (req, res) => {
    try {
        const locations = await Location.find()
        return res.status(201).json(
            locations
        );
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const getLocationById = async ( req, res) => {
    try {
        const id = req.params.id
        const location = await Location.findById(id)
        if (location) {
            return res.status(200).json( location );
        }
        return res.status(404).send('Location with the specified ID does not exists')
    }   catch (error) {
        return res.status(500).send(error.message);
    }
}
const getHikesByLocation = async ( req, res) => {
    try {
        const hikesByLocation = await Hike.find({ location:req.params.id})
        console.log(hikesByLocation)
        if (hikesByLocation) {
            return res.status(200).json(hikesByLocation);
        }
        return res.status(404).send('Hikes with the specified location does not exists')
    }   catch (error) {
        return res.status(500).send(error.message);
    }
}

const getHikeById = async (req, res) => {
    try {
        const hike = await Hike.findById(req.params.id)
        if (hike) {
            return res.status(200).json(hike)
        }
        return res.status(404).send('Hike with Specified ID does not exist')
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
const updateLocation = async (req, res) => {
    try {
      const location = await Location.findByIdAndUpdate(req.params.id, req.body, {
        new: true
      })
      res.status(200).json(location)
    } catch (error) {
      return res.status(500).send(error.message)
    }
  }

const updateHike = async (req, res) => {
    try {
      const hike = await Hike.findByIdAndUpdate(req.params.id, req.body, {
        new: true
      })
      res.status(200).json(hike)
    } catch (error) {
      return res.status(500).send(error.message)
    }
  }

// const deleteLocation = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const deleted = await Location.findByIdAndDelete(id)
//         if (deleted) {
//             return res.status(200).send('Location Deleted');
//         }
//         throw new Error("Location not found")
//     } catch (error) {
//         return res.status(500).send(error.message) 
//     }
// }  

const deleteHike = async (req, res) => {
        try {
            const { id } = req.params;
            const deleted = await Hike.findByIdAndDelete(id)
            if (deleted) {
                return res.status(200).send('Hike Deleted');
            }
            throw new Error("Hike not found")
        } catch (error) {
            return res.status(500).send(error.message) 
        }
    }


module.exports = {
    createLocation,
    createHike,
    getAllHikes,
    getAllLocations,
    getLocationById,
    getHikesByLocation,
    getHikeById,
    updateLocation,
    updateHike,
    // deleteLocation,
    deleteHike
}