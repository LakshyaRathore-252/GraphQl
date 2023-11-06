import { quotes, users } from './fakedb.js'
import { randomBytes } from 'crypto'

// A map of functions which return data for the schema.
const resolvers = {
    Query: {
        users: () => users,
        quotes: () => quotes,
        user: (_, args) => users.find(user => user.id == args.id),
        iquote: (_, { by }) => quotes.filter(quote => quote.by == by),
    },
    User: {
        quotes: (user) => quotes.filter(quote => quote.by == user.id)
    },
    Mutation:
    {
        signupUserDummy: (_, { userNew }) => {
            const id = randomBytes(5).toString("hex");
            users.push({
                id,
                ...userNew
            })
            return users.find(user => user.id == id)
        }
    }
};


export default resolvers