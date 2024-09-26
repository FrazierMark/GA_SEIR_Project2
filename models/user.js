const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema(
	{
		name: String,
		googleId: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			max: 50,
			unique: true,
		},
		avatar: String,
		wish_list: [{ type: Schema.Types.ObjectId, ref: 'FurnitureObject' }],
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('User', userSchema);
