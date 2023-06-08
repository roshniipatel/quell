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

    console.log('Seeds planted!');
    process.exit(0);
});