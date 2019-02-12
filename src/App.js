import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

/*-----------------------------------------------
|   Components
-----------------------------------------------*/
import BookList from './components/BookList';

/*-----------------------------------------------
|   Apollo Setup
-----------------------------------------------*/
const client = new ApolloClient({
  uri: "http://localhost:9999/graphql",
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="container">
          <h1>Hello</h1>
          <BookList />
        </div> 
      </ApolloProvider>
    );
  }
}

export default App;
