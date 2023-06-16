const { AuthenticationError } = require('apollo-server-express');
const { User, Discussion, Resource } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('discussions');
    },
    user: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('discussions');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    discussions: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Discussion.find(params).sort({ createdAt: -1 });
    },
    discussion: async (parent, { discussionId }) => {
      return Discussion.findOne({ _id: discussionId });
    },
    resources: async () => {
      return Resource.find();
    }
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addDiscussion: async (parent, { discussionText, discussionAuthor }, context) => {
      if (context.user) {
        const discussion = await Discussion.create({ discussionText, discussionAuthor });

        await User.findOneAndUpdate({ _id: context.user._id },
          { $addToSet: { discussions: discussion._id } }, { new: true });

        return discussion;
      }
      throw new AuthenticationError('login!')
    },
    removeDiscussion: async (parent, { discussionId }, context) => {
      if (context.user) {
      const discussion = await Discussion.findOneAndDelete({ _id: discussionId });
      await User.findOneAndUpdate({ _id: context.user._id }, { $pull: { discussions: discussion._id } });
      return discussion;
      }
      throw new AuthenticationError('login!');
    },
    addComment: (parent, { discussionId, commentText, commentAuthor }, context) => {
      if (context.user) {
        return Discussion.findOneAndUpdate(
          { _id: discussionId },
          {
            $addToSet: {
              comments: {
                commentText,
                commentAuthor: context.user.username
              }
            }
          }, { new: true })
      }
      throw new AuthenticationError('login!')
    },
    updateLikes: async (parent, { id, likes }) => {
      await Discussion.findByIdAndUpdate(id, { likes }, { new: true });
    }
  },
};

module.exports = resolvers;
