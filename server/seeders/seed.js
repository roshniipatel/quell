const connection = require('../config/connection');
const {Resource, Discussion, User} = require('../models');
const userData = require('./userData.json');
const resourceData = require('./resourceData.json');
const discussionData = require('./discussionData.json');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('Connected, starting seed.');

    // Drop existing db contents
    await User.deleteMany({});
    await Resource.deleteMany({});
    await Discussion.deleteMany({});

    // Insert data from json files
    await User.insertMany(userData);
    await Resource.insertMany(resourceData);
    await Discussion.insertMany(discussionData);

    // Add posts to the user's posts array
    const users = await User.find();
    for (let i = 0; i < users.length; i++) {
        console.log('Finding posts for user: ' + users[i].username);

        // find posts by username
        const posts = await Discussion.find({"discussionAuthor": users[i].username});
        try {
            await User.findOneAndUpdate(
                { "username": users[i].username},
                { $set: { "posts": posts }}
            );
        } catch (err) {
            console.log(err);
        }
    }

    console.log('Seeds planted!');
    process.exit(0);
});