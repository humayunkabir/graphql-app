import React from 'react';
import { Link } from "react-router-dom";
import { graphql } from 'react-apollo';
import Loader from '../common/Loader';
import { getBookQuery } from "../../queries/queries";

const BookDetails = props => {
  const { loading, book } = props.data;
  
  if (loading) return <Loader />;
  
  return (
    <div className="card mb-4">
      <div className="card-header">
        <div className="row justify-content-between align-items-center">
          <div className="col">
            <h5 className="mb-0">{book.title}</h5>
          </div>
          <div className="col-auto">
            <Link className="btn btn-falcon-default btn-sm" to="/">
              <span className="fas fa-chevron-left mr-1" />
              Go Home
            </Link>
          </div>
        </div>
      </div>
      <div className="card-body bg-light">
        <p className="mb-0"><strong>Author:</strong> {book.author.name}</p>
        <p className="mb-0"><strong>Age:</strong> {book.author.age}</p>
        <p className="mb-0"><strong>Genre:</strong> {book.genre}</p>
        <p className="mb-0"><strong>Published:</strong> {book.published}</p>
      </div>
      <div className="card-footer">
        <h5 className="fs-0">Other Book(s) of {book.author.name}</h5>
        <ul className="mb-0">
          {book.author.books.map(b => {
            if (b.id !== props.match.params.bookId) {
              return (
                <li key={b.id}>
                  <Link to={b.id}>
                    {b.title}
                  </Link>
                </li>
              );
            }
            return null;
          })}
        </ul>
      </div>
    </div>
  );
};

export default graphql(getBookQuery, {
  options: props => ({ variables: { id: props.match.params.bookId } })
})(BookDetails);
