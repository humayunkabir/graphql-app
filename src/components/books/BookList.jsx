import React  from 'react';
import { Link } from "react-router-dom";
import { graphql } from 'react-apollo';
import Loader from '../common/Loader';
import { getBooksQuery } from "../../queries/queries";

const BookList = ({ data }) => {
  const { loading, books } = data;
  if (loading) return <Loader />;

  return (
    <div className="row">
      {books.reverse().map(book => (
        <div className="col-lg-6 mb-4" key={book.id}>
          <div className="card h-100">
            <div className="card-header bg-light">
              <h4 className="mb-0">
                <Link to={book.id}>{book.title}</Link>
              </h4>
            </div>
            <div className="card-body">
              <p className="mb-0"><strong>Author:</strong> {book.author.name}</p>
              <p className="mb-0"><strong>Age:</strong> {book.author.age}</p>
              <p className="mb-0"><strong>Genre:</strong> {book.genre}</p>
              <p className="mb-0"><strong>Published:</strong> {book.published}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default graphql(getBooksQuery)(BookList);
