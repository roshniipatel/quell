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
}`;

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
}`;

// Query for single discussion
export const QUERY_SINGLE_DISCUSSION = gql`
query discussion($discussionId: ID!) {
  discussion(discussionId: $discussionId) {
    _id
    discussionText
    discussionAuthor
    createdAt
  }
}`;
