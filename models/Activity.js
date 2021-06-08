import mongoose from 'mongoose';
const { Schema } = mongoose;

const activitySchema = new Schema({
    name: {
        type: String,
        required : true
    },
    type: {
        type: String,
        required : true
    },
    imageUrl: {
        type: String,
        required : true
    },
    isPopular: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Activity', activitySchema);