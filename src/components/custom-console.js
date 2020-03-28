import React, {Component} from 'react';

export default class CustomConsole extends Component{

  printConsole = (data) => {
    console.log(data);
  }

  render(){
    return(
      <div>
        {this.printConsole(this.props.data)}
      </div>
    )
  }
}