import React, { Component } from "react";
import { connect } from "react-redux";
import { addArticle } from "../actions/index";
import './../../styles/forms.css';

function mapDispatchToProps(dispatch) {
  return {
    addArticle: article => dispatch(addArticle(article))
  };
}

class ConnectedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: "",
      publishedDate: "",
      articleBody: "",
      image: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { title, author, publishedDate, articleBody, image } = this.state;
    this.props.addArticle({ title, author, publishedDate, articleBody, image });
    this.setState({ title: "", author: "", publishedDate: "", articleBody: "", image: "" });
  }
  render() {
    const { title, author, publishedDate, articleBody, image } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
      <div className="newArticleForm">
          <div className="formLable"><label htmlFor="title">Title</label></div>
          <div className="forminput">
          <input
            type="text"
            id="title"
            value={title}
            className='formInput'
            onChange={this.handleChange}
          /></div>
          <div className="formLable"><label htmlFor="author">Author</label></div>
          <div className="forminput">
          <input
            type="text"
            id="author"
            value={author}
            className='formInput'
            onChange={this.handleChange}
          /></div>
          <div className="formLable"><label htmlFor="publishedDate">publishedDate</label></div>
          <div className="forminput">
          <input
            type="text"
            id="publishedDate"
            value={publishedDate}
            className='formInput'
            onChange={this.handleChange}
          /></div>
          <div className="formLable"><label htmlFor="articleBody">Article Body</label></div>
          <div className="forminput">
          <input
            type="text"
            id="articleBody"
            value={articleBody}
            className='formInput'
            onChange={this.handleChange}
          /></div>
          <div className="formLable"><label htmlFor="image">image</label></div>
          <div className="forminput">
          <input
            type="text"
            id="image"
            value={image}
            className='formInput'
            onChange={this.handleChange}
          /></div>
        <button type="submit">SAVE</button>
        </div>
        </form>
    );
  }
}

const Form = connect(
  null,
  mapDispatchToProps
)(ConnectedForm);

export default Form;
