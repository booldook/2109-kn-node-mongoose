const mongoose = require('mongoose');
const { Schema } = mongoose;
const userSchema = new Schema({
	userid: {
		type: String,
		required: true,
		unique: true
	},
	username: {
		type: String,
		required: true,
	},
	createAt: {
		type: Date,
		default: Date.now(),
	}
});

module.exports = mongoose.model("User", userSchema);