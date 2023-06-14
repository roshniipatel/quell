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

// export const ADD_DISCUSSION = gql`
//   mutation addThought($thoughtText: String!, $thoughtAuthor: String!) {
//     addDiscussion(discussionText: $discussionText, discussionAuthor: $discussionAuthor) {
//       _id
//       discussionText
//       discussionAuthor
//       createdAt
//       comments {
//         _id
//         commentText
//       }
//     }
//   }
// `;

export const ADD_DISCUSSION = gql`
  mutation addDiscussion($discussionText: String!, $discussionAuthor: String!) {
    addDiscussion(discussionText: $discussionText, discussionAuthor: $discussionAuthor) {
      _id
      discussionText
      discussionAuthor
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;


// export const ADD_DISCUSSION = gql`
//   mutation addDiscussion($discussionText: String!) {
//     addDiscussion(discussionText: $discussionText) {
//       _id
//       discussionText
//       discussionAuthor
//       createdAt
//       comments {
//         _id
//         commentText
//       }
//     }
//   }
// `;