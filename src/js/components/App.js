import React from 'react';
import ArticleList from './ArticleList';
import ArticleForm from './ArticleForm';

const App = () => (
  <div className="row mt-5">
    <div className="col-md-4 offset-md-1">
      <h2>Articles</h2>
      <ArticleList />
    </div>
    <div className="col-md-4 offset-md-1">
      <h2>Add a new article</h2>
      <ArticleForm />
    </div>
  </div>
);

export default App;
