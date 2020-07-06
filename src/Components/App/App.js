import React, { useState, 
                useEffect, 
                useRef, 
                useCallback, 
                useMemo
} from 'react';
import randomColor from 'randomcolor';

import Name from '../Name/Name';


function App() {

  return (
    <section className="App">
      <h1>Paint Board</h1>
      <Name />
    </section>
  );
}

export default App;
