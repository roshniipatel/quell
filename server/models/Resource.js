// These are NOT made by users. They are seeded and added that way for security and curation purposes
// Allows comments by users

// TODO: format dates

const { Schema, model } = require('mongoose');

const resourceSchema = new Schema({
    resourceLink: {
        type: String,
        minlength: 5,
        trim: true,
    },
    resourceText: {
        type: String,
        minlength: 1,
        maxlength: 280,
        required: true,
        trim: true,
    },
    comments: [
        {
            commentText: {
                type: String,
                minlength: 1,
                maxlength: 280,
                required: true,
                trim: true,
            },
            commentAuthor: {
                type: String,
                required: true,
                trim: true,
            },
            creationDate: {
                type: Date,
                default: Date.now,
            },
        },
    ],
});

const Resource = model('Resource', resourceSchema);

module.exports = Resource;