import gql from "graphql-tag";

export const GET_INTRO_VIDEO = gql`
{
  introVideo {
    _id
    videoLink
  }
}
`;
