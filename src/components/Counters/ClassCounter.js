import React, { Component } from 'react';

class ClassCounter extends Component{

  render(){
    // example of how to not do it
    let count = 0;

    return(
      <div>
        <div>
          {count}
        </div>
        <button
          onClick={() => count++}
        >
          Aumenta el valor
        </button>
        <button
          onClick={() => count--}
        >
          Disminuir el valor
        </button>
      </div>
    );
  }
}

export default ClassCounter;