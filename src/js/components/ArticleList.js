import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { removeArticle } from '../actions';

const mapStateToProps = state => {
  return { articles: state.articles };
};

const mapDispatchToProps = dispatch => {
  return {
    removeArticle: index => dispatch(removeArticle(index)),
  };
};

class ConnectedList extends Component {
  handleRemove = index => {
    const { removeArticle } = this.props;
    removeArticle(index);
  };

  render() {
    const { articles } = this.props;
    return (
      <ul className="list-group list-group-flush">
        {articles.map((el, index) => (
          <li className="list-group-item" key={el.id}>
            {el.title}
            <span className="pull-right button-group">
              <span
                className="glyphicon glyphicon-remove"
                onClick={() => this.handleRemove(index)}
              />
            </span>
          </li>
        ))}
      </ul>
    );
  }
}

const ArticleList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConnectedList);

ConnectedList.propTypes = {
  articles: PropTypes.array.isRequired,
};

export default ArticleList;
