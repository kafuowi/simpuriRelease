const mongoose = require('mongoose')
const Schema = mongoose.Schema;
 
const WorldcupSchema = new Schema({
  title: String,
  body: String,
  // username: String,
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  datePosted:{ 
    type: Date,
    default: new Date()
  }, 
  candidateName: [String],
  image: [String]
})

const Worldcup = mongoose.model('Worldcup',WorldcupSchema);
module.exports = Worldcup