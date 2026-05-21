import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        required: true,
        default: false
    }
}, { timestamps: true })

export const Todo =
    mongoose.models.Todo || mongoose.model("Todo", todoSchema);