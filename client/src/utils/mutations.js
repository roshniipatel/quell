import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_DISCUSSION = gql`
mutation addDiscussion($discussionText: String!, $discussionAuthor: String!) {
  addDiscussion(discussionText: $discussionText, discussionAuthor: $discussionAuthor) {
    _id
    discussionAuthor
    discussionText
    createdAt
    comments {
      _id
    }
  }
}
`;

// It adds a comment to a discussion
export const ADD_COMMENT=gql`
mutation addComment($discussionId: ID!, $commentText: String!, $commentAuthor: String!) {
  addComment(discussionId: $discussionId, commentText: $commentText, commentAuthor: $commentAuthor) {
    _id
    comments {
      _id
      commentAuthor
      commentText
      createdAt
    }
  }
}
`;

export const UPDATE_LIKES = gql`
  mutation updateLikes($updateLikesId: ID!, $likes: Int!) {
    updateLikes(id: $updateLikesId, likes: $likes) {
      _id
      likes
    }
  }
`;
export const REMOVE_DISCUSSION=gql`
mutation removeDiscussion($discussionId: ID!) {
  removeDiscussion(discussionId: $discussionId) {
    _id
    discussionText
    discussionAuthor
    comments {
      _id
      commentText
      commentAuthor
    }
  }
}
`;
