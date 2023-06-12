const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    discussion: [Discussion]!
  }

  type Discussion {
    _id: ID
    discussionText: String
    discussionAuthor: String
    createdAt: String
    comments: [Comment]!
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    discussions(username: String): [Discussion]
    discussion(discussionId: ID!): Discussion
    
    #Context functionality from resolvers.js
    userData: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addDiscussion(discussionText: String!, discussionAuthor: String!): Discussion
    addComment(
      discussionId: ID!
      commentText: String!
      commentAuthor: String!
    ): Discussion
    removeDiscussion(discussionId: ID!): Discussion
    removeComment(discussionId: ID!, commentId: ID!): Discussion
  }
`;

module.exports = typeDefs;
