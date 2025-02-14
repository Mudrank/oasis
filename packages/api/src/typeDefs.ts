// @todo Handle these types, make a directory for them and add resolvers

// type ActivityEvent {
//   id: ID!
//   type: String!
//   eventString: String!
//   user: User
//   repo: Repo
// }

// type Comment {
//   id: ID!
//   author: User!
//   content: String!
//   likes: Int!
//   dislikes: Int!
// }

// type Post {
//   id: ID!
//   title: String!
//   content: String!
//   media: [String]
//   tags: [String]
//   comments: [Comment]
// }

import { join } from "path";
import { writeFileSync } from "fs";
import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeTypeDefs } from "@graphql-tools/merge";
import { print } from "graphql";

const typesArray = loadFilesSync(join(__dirname, "../src/modules/**/*.gql"));

const typeDefs = mergeTypeDefs(typesArray);
export default typeDefs;

// Save Type Defs for the "client-gql" package

const printedTypeDefs = print(typeDefs);

console.log(join(__dirname, "./modules/**/*.gql"), typesArray, printedTypeDefs);

writeFileSync(join(__dirname, "../../client-gql/schema.gql"), printedTypeDefs);
