import { gql } from '@apollo/client';

export const QUERY_PROFILES = gql`
  query allProfiles {
    profiles {
      _id
      name
      achievements
    }
  }
`;

export const USER_PROFILE=gql`
query user($username: String!) {
  user(username: $username) {
    _id
    username
    email
    discussions {
      _id
      discussionText
      discussionAuthor
      createdAt
      comments {
        _id
        commentAuthor
        commentText
        createdAt
      }
    }
    accomplishments {
      accomplishment
    }
    gratitudes {
      gratitude
    }
  }
}`

// Query for discussions list
export const  DISCUSSION_LIST=gql`
query discussions {
  discussions {
    _id
    discussionText
    discussionAuthor
    createdAt
    comments {
      _id
      commentAuthor
      commentText
      createdAt
    }
  }
}`

// Query for single discussion
export const QUERY_SINGLE_DISCUSSION = gql`
query discussion($discussionId: ID!) {
  discussion(discussionId: $discussionId) {
    _id
    discussionText
    discussionAuthor
    createdAt
  }
}`


// Queries for profile page 
// export const QUERY_USER = gql`
// query user($username: String!) {
//   user(username: $username) {
//     _id
//     username
//     email
//     discussions {
//       discussionText
//       discussionAuthor
//       createdAt
//     }
//     accomplishments {
//       accomplishment
//     }
//   }
// }`

// export const USER_PROFILE = gql`
// query user($username: String!) {
//   user(username: $username) {
//     accomplishments {
//       accomplishment
//     }
//     gratitudes {
//       gratitude
//     }
//     email
//     username
//     discussions {
//       discussionText
//       discussionAuthor
//       createdAt
//     }
//   }
// }`

// Query for user profile

// query for discussions page
// export const USER_DISCUSSIONS=gql`
// query users {
//   users {
//     _id
//     username
//     email
//     discussions {
//       _id
//       discussionText
//       discussionAuthor
//       createdAt
//     }
//   }
// }`

