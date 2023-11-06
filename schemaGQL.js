

// The GraphQL schema
const typeDefs = `#graphql
  type Query {
    users: [User]
    quotes:[Quote]
    user(id:ID!):User
    iquote(by:ID!):[Quote]
  }

  type User{
    id:ID 
    firstName:String
    lastName:String
    email:String
    password:String
    quotes:[Quote]
  }

  type Quote{
    name:String
    by:String
  }


  type Mutation{
    signupUserDummy(userNew :userInput!):User
  }

  input userInput{
    firstName:String ! ,
     lastName:String! ,
     email:String! , 
     password : String!
  }


`;


export default typeDefs;