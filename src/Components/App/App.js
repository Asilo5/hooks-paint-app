import React, { useState, 
                useEffect, 
                useRef, 
                useCallback, 
                useMemo
} from 'react';

import Paint from '../Paint/Paint';

function App() {

  return (
    <section className="App">
      <h1>Paint Board</h1>
      <Paint />
    </section>
  );
}

export default App;
