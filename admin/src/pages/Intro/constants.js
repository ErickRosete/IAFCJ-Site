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

export const GET_ABOUT = gql`
  {
    about {
      _id
      about
      imageLink
    }
  }
`;

export const EDIT_ABOUT = gql`
  mutation UpdateAbout($about: String, $imageLink: String) {
    updateAbout(
      aboutInput: {
        about: $about
        imageLink: $imageLink
      }
    ) {
      _id
      about
      imageLink
    }
  }
`;


export const GET_INTRO_VIDEO = gql`
  {
    introVideo {
      _id
      videoLink
    }
  }
`;

export const EDIT_INTRO_VIDEO = gql`
  mutation UpdateIntroVideo($videoLink: String!) {
    updateIntroVideo(videoLink: $videoLink) {
      _id
      videoLink
    }
  }
`;

