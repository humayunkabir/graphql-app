import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import Loader from "../common/Loader";
import {getAuthorsQuery, addBookMutation, getBooksQuery} from "../../queries/queries";

class AddBook extends Component {
  state = {
    title: '',
    genre: '',
    published: '',
    authorId: '',
  };

  /*-----------------------------------------------
  |   Handler
  -----------------------------------------------*/
  handleChange = ({ target }) => this.setState({ [target.name]: target.value });
  handleAddBook = e => {
    e.preventDefault();
    const { title, genre, published, authorId } = this.state;
    this.props.addBookMutation({
      variables: { title, genre, published, authorId },
      refetchQueries: [{ query: getBooksQuery }],
    });
    this.setState({ title: "", genre: "", published: "", authorId: "" })
  };

  render() {
    const { title, genre, published, authorId } = this.state;
    const { loading, authors } = this.props.Authors;
    
    if (loading) return <Loader />;

    return (
      <div className="card mb-4">
        <div className="card-header bg-light">
          <h4 className="mb-0">Add New Book</h4>
        </div>
        <div className="card-body">
          <form onSubmit={this.handleAddBook}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Title"
                name="title"
                value={title}
                onChange={this.handleChange}
              />  
            </div>
            
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Genre"
                name="genre"
                value={genre}
                onChange={this.handleChange}
              />  
            </div>
            
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Publication Date"
                name="published"
                value={published}
                onChange={this.handleChange}
              />  
            </div>
            
            <div className="form-group">
              <select
                className="form-control"
                name="authorId"
                value={authorId}
                onChange={this.handleChange}
              >
                <option value="">Select Author</option>
                {authors.map(author => <option value={author.id} key={author.id}>{author.name}</option>)}
              </select>
            </div>
            <button className="btn btn-primary btn-block" disabled={ title && genre && published && authorId ? false : true }>Add Book</button>
          </form>
        </div>
      </div>
    );
  }
 }

export default compose(
  graphql(getAuthorsQuery, { name: "Authors" }),
  graphql(addBookMutation, { name: "addBookMutation" })
)(AddBook);
