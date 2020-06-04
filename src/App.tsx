import React from 'react';
import ArticlesContainer from 'components/containers/articles-container';
import { colors } from '@material-ui/core';
import Loader from 'react-loader-spinner';
import NewsLoader from 'components/loader/loader';

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
