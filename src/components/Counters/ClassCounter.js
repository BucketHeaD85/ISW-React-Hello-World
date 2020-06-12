import React, { Component } from 'react';

class ClassCounter extends Component{

  constructor(props){
    super(props);
    this.state = {
      count: 0,
    }
  }

  render(){
    const count =  this.state.count;

    return(
      <div>
        <div>
          {count}
        </div>
        <button
          onClick={() => this.setState({
            ...this.state,
            count: count+1
          })}
        >
          Aumenta el valor
        </button>
        <button
          onClick={() => this.setState({
            ...this.state,
            count: count-1
          })}
        >
          Disminuir el valor
        </button>
      </div>
    );
  }
}

export default ClassCounter;