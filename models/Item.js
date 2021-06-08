import mongoose from 'mongoose';
const Schema = mongoose;
const { ObjectId } = Schema;

const itemSchema = new Schema({
    title: {
        type: String,
        required : true
    },
    price: {
        type: Number,
        required: true
    },
    country: {
        type: String,
        default: 'Indonesia',
        required: true
    },
    city: {
        type: String,
        required: true
    },
    isPopular: {
        type: Boolean,
        default: false
    },
    description: {
        type: String,
        required: true
    },
    imageId: {
        type: ObjectId,
        ref: 'Image'
    },
    featureId: {
        type: ObjectId,
        ref: 'Feature'
    },
    activity: {
        type: ObjectId,
        ref: 'Activity'
    },
});

module.exports = mongoose.model('Item', itemSchema);