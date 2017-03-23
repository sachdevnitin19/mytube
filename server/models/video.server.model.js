var mongoose          = require('mongoose'),
    videoSchema       =  mongoose.Schema({
    title:               { type: String },
    public_id:           { type: String },
    description:         { type: String, required: true },
    url:                 { type: String, required: true },
    duration:            { type: Number},
    format:              { type: String},
    width:               { type: Number},
    height:              { type: Number},
    uploaded_by:         { type: String, required: true },
    views:               { type: Number,default:0 },
    time_uploaded:       { type: Date, default: Date.now }
});

module.exports = mongoose.model('Video', videoSchema, 'videos');
