import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

/*-----------------------------------------------
|   Components
-----------------------------------------------*/
import BookList from './components/books/BookList';
import AddBook from './components/books/AddBook';
import BookDetails from './components/books/BookDetails';

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
        <section className="py-4">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <Switch>
                  <Route exact path="/" component={BookList}/>
                  <Route exact path="/:bookId" component={BookDetails}/>
                </Switch>
              </div>
              <div className="col">
                <AddBook />
              </div>
            </div>
          </div>
        </section>
      </ApolloProvider>
    );
  }
}

export default App;
