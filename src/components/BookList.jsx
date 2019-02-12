import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getBooksQuery = gql`
  {
    books {
      id
      title
      genre
      published
    }
  }
`;

class BookList extends Component {
  displayBooks = () => {
    const { data } = this.props;
    if (data.loading) {
      return <div>Loading...</div>;
    }
    return data.books.map(book => (
      <li key={book.id}>{book.title}</li>
    ))
  };
  render() {
    return (
      <ul>
        {this.displayBooks()}
      </ul>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
