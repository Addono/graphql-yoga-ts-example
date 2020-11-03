import gql from "graphql-tag"
import { GraphQLServer } from "graphql-yoga"
import { randomInt } from 'crypto';

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

  type Mutation {
    createUser(name: String!): User
    deleteUser(id: ID!): User
  }
`

type User = { id: string, name: string}
type Users = User[]

const users: Users = []

const server = new GraphQLServer({
  typeDefs,
  resolvers: {
    Query: {
      users: () => {
        return users
      }
    },
    Mutation: {
      createUser: (_, args) => {
        // Create our new user
        const newUser: User = {
          id: randomInt(10**5).toString(),
          name: args.name,
        }

        // Store our new user in memory
        users.push(newUser)

        // Return the newly created user
        return newUser
      },
      deleteUser: (_, args) => {
        // Find the index of where our user is storred in the array
        const index = users.findIndex((user) => user.id === args.id)

        // Remove the user from the array
        const [removedUser] = users.splice(index, 1)

        return removedUser
      }
    }
  },
})

server.start({ port: 5000 }, () => console.log('Server is running on http://localhost:5000 🚀'))
