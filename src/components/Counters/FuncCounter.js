import React, { useState } from 'react';

function FuncCounter(params) {
  // example of how to not do it
  const [count, setCount] = useState(0);
  
  return(
    <div>
      <div>
        {count}
      </div>
      <button
        onClick={() => setCount(count+1)}
      >
        Aumenta el valor
      </button>
      <button
        onClick={() => setCount(count-1)}
      >
        Disminuir el valor
      </button>
    </div>
  );
}

export default FuncCounter;