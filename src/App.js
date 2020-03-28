import React, {Component} from 'react';
import './App.css';
import CustomConsole from './components/custom-console';

export default class App extends Component {

  render(){
    return (
      <div className="App">
        <CustomConsole data={'pass the data here you want to see in console in your component'} />
      </div>
    );
  }
}

