import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost5000/graphql',
  cache: new InMemoryCache(),
})


function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <div className="container">

        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
