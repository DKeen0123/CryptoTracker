import React from 'react';
import Wrapper from '../containers/Wrapper';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div>
        <Wrapper />
      </div>
    </ApolloProvider>

  );
};

export default App;
