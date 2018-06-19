import React, { Component } from 'react';
import Facts from './components/Facts';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center">Facts and Idioms</h1>
        <Facts />
      </div>
    );
  }
}

export default App;
