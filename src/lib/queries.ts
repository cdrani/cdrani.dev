import { gql } from "@urql/core";

export type post = {
  cuid: string;
  title: string;
  slug: string;
  brief: string;
  dateAdded: string;
  contentMarkdown: string;
};

export const postsQuery = gql`
  query UserQuery {
    user(username: "cdrani") {
      publication {
        posts {
          cuid
          title
          slug
          brief
          dateAdded
          contentMarkdown
        }
      }
    }
  }
`;
