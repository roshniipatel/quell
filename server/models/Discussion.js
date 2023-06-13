// Posted by a user and visible to other users
// Other users can comment and like

// TODO: format dates
const dateToday=require('../utils/dateHelper');

const { Schema, model } = require('mongoose');

const discussionSchema = new Schema({
    discussionText: {
        type: String,
        minlength: 1,
        maxlength: 280,
        required: true,
        trim: true,
    },
    discussionAuthor: {
        type: String,
        required: true,
        trim: true,
    },
    creationDate: {
        type: Date,
        default: Date.now,
        get:(x)=>dateToday(x),
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
                get:(x)=>dateToday(x),
            },
        },
    ],
    likes: {
        type: Number,
        default: 0,
        required: true
    },
});

const Discussion = model('Discussion', discussionSchema);

module.exports = Discussion;

// ------------ Reference ------------

// const { Schema, model } = require('mongoose');
// const dateFormat = require('../utils/dateFormat');

// const thoughtSchema = new Schema({
//   thoughtText: {
//     type: String,
//     required: 'You need to leave a thought!',
//     minlength: 1,
//     maxlength: 280,
//     trim: true,
//   },
//   thoughtAuthor: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//     get: (timestamp) => dateFormat(timestamp),
//   },
//   comments: [
//     {
//       commentText: {
//         type: String,
//         required: true,
//         minlength: 1,
//         maxlength: 280,
//       },
//       commentAuthor: {
//         type: String,
//         required: true,
//       },
//       createdAt: {
//         type: Date,
//         default: Date.now,
//         get: (timestamp) => dateFormat(timestamp),
//       },
//     },
//   ],
// });

// const Thought = model('Thought', thoughtSchema);

// module.exports = Thought;
