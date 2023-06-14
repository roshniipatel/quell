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

// Queries for profile page 
export const QUERY_USER = gql`
query user($username: String!) {
  user(username: $username) {
    _id
    username
    email
    discussions {
      discussionText
      discussionAuthor
      createdAt
    }
    accomplishments {
      accomplishment
    }
  }
}`

// export const USER_PROFILE=gql`
// query userData {
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
//   }`
export const USER_PROFILE = gql`
query users {
  users {
    _id
    username
    email
    discussions {
      discussionText
      discussionAuthor
      createdAt
    }
    accomplishments {
      accomplishment
    }
  }
}`
// Query for discussions and single discussions
export const QUERY_DISCUSSIONS = gql`
query discussions {
  _id
  discussionText
  discussionAuthor
  createdAt
}`

export const QUERY_SINGLE_DISCUSSION = gql`
query discussion($discussionId: ID!) {
  discussion(discussionId: $discussionId) {
    _id
    discussionText
    discussionAuthor
    createdAt
  }
}`
