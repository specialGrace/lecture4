import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    author: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref:'User'
    },
    image: { type: String, required: [true, 'image is required'] },
    name: { type: String, required: [true, 'name is required'] },
    gender: { type: String, required: [true, 'gender is required'] },
    location: { type: String, required: [true, 'location is required'] },
}, {
    timestamps:true
});

const CartoonPost = mongoose.model('CartoonPost', userSchema)


export default CartoonPost;
