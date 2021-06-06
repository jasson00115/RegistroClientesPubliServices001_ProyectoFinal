const { makeExecutableSchema } = require('graphql-tools');
const resolvers = require('./resolvers');


const typeDefs = `

type Query {
   hello: String
   saludo: String
    tasks: [Task]
    Users: [User]
}

type Task{
    _id: ID
    title: String!
    description: String!
    number: Int

}

type User{
    _id: ID
    negocio: String
    firstname: String
    lastname: String
    precio: Int
    tipo: String
}

type Mutation{
    createTask(input: TaskInput): Task
    createUser(input: UserInput): User
    deleteUser(_id: ID): User
    updateUser(_id: ID,  input: UserInput): User
}

input TaskInput{
   
    title: String!
    description: String
    number: Int
}

input UserInput {
    negocio: String
    firstname: String
    lastname: String
    precio: Int
    tipo: String
}


`;//definismos lo que se puede consultar


const schema = makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolver,
});

module.exports = schema;