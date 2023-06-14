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
query user($username: String!) {
  user(username: $username) {
    accomplishments {
      accomplishment
    }
    gratitudes {
      gratitude
    }
    email
    username
    discussions {
      discussionText
      discussionAuthor
      createdAt
    }
  }
}`


// query for discussions page
export const DISCUSSIONS=gql`
query users {
  users {
    _id
    username
    email
    discussions {
      _id
      discussionText
      discussionAuthor
      createdAt
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
