import { gql } from 'apollo-boost';

export const getAuthorsQuery = gql`
  {
    authors {
      id
      name
    }
  }
`;

export const getBooksQuery = gql`
  {
    books {
      id
      title
      genre
      published
      author {
        name
        age
      }
    }
  }
`;

export const getBookQuery = gql`
  query($id: ID){
    book(id: $id) {
      title
      genre
      published
      author {
        name
        age
        books {
          id
          title
        }
      }
    }
  }
`;

export const addBookMutation = gql`
  mutation($title: String!, $genre: String!, $published: String!, $authorId: ID!) {
    addBook(title: $title, genre: $genre, published: $published, authorId: $authorId) {
      id
      title
      genre
      published
      author {
        name
        age
      }
    }
  }
`;
