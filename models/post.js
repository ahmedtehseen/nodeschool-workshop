import mongoose from "mongoose";

let postSchema = new mongoose.Schema({
	text: {
		type: String,
		required: true
	},
	completed: {
		type: Boolean,
		required: true,
		default: false
	},
	createdBy: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
}, { timestamps: true });


export let Post = mongoose.model('Post', postSchema);