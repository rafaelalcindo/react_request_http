import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';


import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Blog />
      </div>
    );
  }
}

export default App;
