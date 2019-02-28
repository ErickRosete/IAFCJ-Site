import gql from "graphql-tag";

export const GET_INTRO = gql`
  {
    Intro {
      _id
      attentionSchedule
      imageLink
    }
  }
`;

export const EDIT_INTRO = gql`
  mutation UpdateIntro($attentionSchedule: String, $imageLink: String) {
    updateIntro(
      introInput: {
        attentionSchedule: $attentionSchedule
        imageLink: $imageLink
      }
    ) {
      _id
      attentionSchedule
      imageLink
    }
  }
`;
