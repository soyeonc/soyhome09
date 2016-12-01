var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var cupsPerweek=0;
var coffeeShop;
var knowRecycleQuery;

// See http://mongoosejs.com/docs/schematypes.html

var coffeeSchema = new Schema({
	cupsPerWeek: Number,
	coffeeShop: String,
	// coffeeShop: {
 //        type: String,
 //        enum: ['Starbucks', 'Think Coffee', 'Hungry Ghost', 'Orens', 'Dunkin Donuts','at home' ]
 //      },
	knowRecycleQuery: Boolean
})

// export 'Person' model so we can interact with it in other files
module.exports = mongoose.model('Coffee',coffeeSchema);