import React, { useEffect, useState } from 'react';
import ArticlesContainer from 'components/containers/articles-container';
import { ArticleProps } from 'components/article/article';
import { Container } from '@material-ui/core';
import { IArticle } from 'models/IArticle';

function App() {
  return (
    <div className="App">
      <div
        style={{
          maxWidth: 1140,
          margin: '2em auto',
        }}
      >
        <ArticlesContainer />
      </div>
    </div>
  );
}

export default App;
