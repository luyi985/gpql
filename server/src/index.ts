import './config';
import { ApolloServer, gql } from 'apollo-server';
import { find, filter } from 'lodash';
import './core/USER'

const typeDefs = gql`
	type Book {
		title: String
		author: String
	}

	type Author {
		books: [Book]
	}
	type Query {
		books: [Book]
		author(id: Int): Author
	}
`;

const authors = [
	{
		id: 1,
		authorn: 'J.K. Rowling',
	},
	{
		id: 2,
		author: 'Michael Crichton',
	},
];
const books = [
	{
		title: 'Harry Potter and the Chamber of Secrets',
		author: 'J.K. Rowling',
	},
	{
		title: 'Jurassic Park',
		author: 'Michael Crichton',
	},
];
const resolvers = {
	Query: {
		books: () => books,
		author: (parent: any, args: any, context: any, info: any) => {
			return find(authors, { id: args.id });
		},
	},
	Author: {
		books(parent: any, args: any, context: any, info: any) {
			return filter(books, { author: parent.author });
		},
	},
};

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
	console.log(`🚀  Server ready at ${url}`);
});
