import React, { useState, 
                useEffect, 
                useRef, 
                useCallback, 
                useMemo
} from 'react';

import Paint from '../Paint/Paint';
import WindowSize from '../WindowSize/WindowSize';

function App() {

  return (
    <section className="App">
      <h1>Paint Board</h1>
      <Paint />
      <WindowSize />
    </section>
  );
}

export default App;
