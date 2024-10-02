export const typeDefs = `#graphql
type Game {
    id: ID!  # ID is non-nullable
    title: String!  # Title is non-nullable
    platform: [String!]!  # Platform is a non-nullable list of non-nullable strings
}

type Review {
    id: ID!
    rating: Int!
    content: String!
}

type Author {
    id: ID!
    name: String!
    verified: Boolean!
}

type Query {
    reviews: [Review]
    games: [Game]
    authors: [Author]
}
`;
