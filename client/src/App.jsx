import React, { Component } from 'react';
import './App.scss';
import DraftyEditor from './components/DraftyEditor/DraftyEditor';

class App extends Component {

  render() {
    return (
      <div className="App">
        <DraftyEditor />
      </div>
    );
  }
}

export default App;
