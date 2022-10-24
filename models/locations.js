const moongoose = require('mongoose')
const Schema = moongoose.Schema

const Location = new Schema(
    {
        city: { type: String, required: true },
        image: { type: String, required: false },
     }, 
    {timestamp: true },
)

module.exports = moongoose.model('Location', Location)