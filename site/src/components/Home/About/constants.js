import gql from "graphql-tag";

export const GET_ABOUT = gql`
{
  about {
    _id
    about
    imageLink
  }
}
`;
