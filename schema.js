export const typeDefs = `#graphql
type Game{
    id: ID!  // ! means not null
    title: String!,
    platform: [String!]!
}
`;
