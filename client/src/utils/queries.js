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

// context query from from resolvers.js on server side
export const USER_DATA = gql`
  query userData {
    userData {
      _id
      username
    }
  }
`;
