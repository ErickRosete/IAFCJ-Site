import gql from "graphql-tag";

export const GET_INTRO = gql`
  {
    intro {
      _id
      attentionSchedule
      imageLink
    }
  }
`;