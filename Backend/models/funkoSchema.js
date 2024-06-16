const mongoose = require('mongoose');

const funkoPopSchema = mongoose.Schema({
    name: {type: String, required: true},
    series: {type: String, required: true},
    releaseYear: {type: Number, required: true},
    price: {type: Number, required: true},
    imageUrl: {type: String, required: true},
    description: {type: String, required: true}
});

const FunkoPop = mongoose.model('FunkoPop', funkoPopSchema);

module.exports = FunkoPop;