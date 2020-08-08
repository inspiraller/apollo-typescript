import { ApolloServer } from 'apollo-server';
import typeDefs from './schema';
import resolvers from './resolvers';

const init = async () => {
  const server: ApolloServer = new ApolloServer({
    typeDefs,
    resolvers
  });

  server.listen().then((props: { url: string }) => {
    const { url } = props;
    console.log(`Server ready at ${url}`);
  });
};

init();
