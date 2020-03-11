import React, { Component } from 'react';
import Moment from 'moment';
import { v4 } from 'uuid';
import { connect } from 'react-redux';
import constants from './../constants';
import { addArticle } from '../actions/index';
import './../../styles/forms.css';

const { c } = constants;

function mapDispatchToProps(dispatch) {
  return {
    addArticle: article => dispatch(addArticle(article))
  };
}

class ConnectedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      masterArticleList : [{}]
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { newArticleList } = this.state;
    this.props.addArticle({
    newArticleList
  });
    this.setState({ newArticleList });
  }
  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            id='title'
            value={title}
            onChange={this.handleChange}
          />
        </div>
        <button type='submit'>SAVE</button>
      </form>
    );
  }
}

const NewArticleForm = connect(
  null,
  mapDispatchToProps
)(ConnectedForm);

export default NewArticleForm;
