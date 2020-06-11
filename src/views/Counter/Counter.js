import React from 'react';

import FuncCounter from '../../components/Counters/FuncCounter';
import ClassCounter from '../../components/Counters/ClassCounter';


function Counter(params) {
  return(
    <div>
      {/* <FuncCounter></FuncCounter> */}
      <ClassCounter></ClassCounter>
    </div>
  );
}

export default Counter;