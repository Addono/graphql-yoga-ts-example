import gql from "graphql-tag"
import { GraphQLServer } from "graphql-yoga"

const typeDefs = gql`
  type User {
    id: ID!
    name: String
  }

  type Query {
    users: [User!]!
  }
`

const server = new GraphQLServer({
  typeDefs,
  resolvers: {},
})

server.start({ port: 5000 }, () => console.log('Server is running on http://localhost:5000 🚀'))
