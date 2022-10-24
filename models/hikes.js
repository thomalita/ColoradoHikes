const moongoose = require('mongoose')
const Schema = moongoose.Schema

const Hike = new Schema(
    {
        location: { type: Schema.Types.ObjectId, ref: 'Location' },
        image: { type: String, required: false },
        difficulty: { type: String, required: true },
        miles: { type: Number, required: true },
        details: { type: String, required: true },
     }, 
    {timestamp: true },
)

module.exports = moongoose.model('Hike', Hike)

