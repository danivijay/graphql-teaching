const { GraphQLServer } = require('graphql-yoga');

const typeDefs = `
type Query {
    info: String!
}
`;

const resolvers = {
      Query: {
            info: () => 'Test',
      },
};

const server = new GraphQLServer({
      typeDefs,
      resolvers,
});

server.start(() => console.log('server is running on http://localhost:4000'));
