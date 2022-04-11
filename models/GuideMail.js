
const mongoose = require('mongoose')
const GuideSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Please add an e-mail'],
    unique: true,
    trim: true,
  },
})

module.exports =
  mongoose.models.Guide || mongoose.model('Guide', GuideSchema)
