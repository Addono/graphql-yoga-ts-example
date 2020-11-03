import gql from "graphql-tag"
import { GraphQLServer } from "graphql-yoga"

const typeDefs = gql`
  type User {
    id: ID!
    """
    The name of this user. 
    
    _Note: We can use **Markdown**_ 🎉
    """
    name: String
  }

  type Query {
    users: [User!]!
  }
`

const server = new GraphQLServer({
  typeDefs,
  resolvers: {
    Query: {
      users: () => {
        return []
      }
    }
  },
})

server.start({ port: 5000 }, () => console.log('Server is running on http://localhost:5000 🚀'))
